import { chain, defaultUserImage } from "../../config/appConfig";
import { gasLimit } from "../constants/transactionConstant";
import { calculateGasPrice, fetchGif, getNetwork } from "../helpers/helper"
import { TransactionModel } from "../models/transaction.model";
import { UserModel } from "../models/user.model";

const Web3 = require("web3")
const web3 = new Web3(getNetwork())
export const WalletService = {

  getBalance: async (reqData: any) => {
    let balance = 0;
    const address = reqData.address;
    await web3.eth.getBalance(address).then((_balance: any) => {
      console.log(`Balance of account is ${_balance} wei or ${web3.utils.fromWei(_balance, "ether")} ethers`)
      balance = _balance;
    })
    return { "balance": balance }
  },

  sendMoney: async (reqData: any) => {
    let transactionReceipt: any, nonce;
    const Tx = require('ethereumjs-tx').Transaction
    const senderAccount = web3.eth.accounts.privateKeyToAccount(reqData.userKey)
    console.log(senderAccount)
    web3.eth.getBalance(senderAccount.address, (err: any, balance: any) => {
      console.log(`Balance of Sender Account ${senderAccount.address} is ${balance}`)
    })

    web3.eth.getBalance(reqData.to, (err: any, balance: any) => {
      console.log(`Balance of Receiver Account 2 ${reqData.to} is ${balance}`)
    })
    const gasPrice = await calculateGasPrice();
    const fromUser = UserModel.findOne({
      where: {
        walletAddress: senderAccount.address
      }
    })
    const toUser = UserModel.findOne({
      where: {
        walletAddress: reqData.to
      }
    })
    const txData = await TransactionModel.create({
      date: new Date().getTime(),
      from: senderAccount.address,
      fromImage: fromUser?.profileImage || defaultUserImage,
      to: reqData.to,
      toImage: toUser?.profileImage || defaultUserImage,
      gas: gasPrice,
    })
    console.log(txData)
    const senderKey = senderAccount.privateKey.slice(2,) //removing 0x from starting

    let privateKeyBuffer = Buffer.from(senderKey, 'hex');

    await web3.eth.getTransactionCount(senderAccount.address, (data: any, _nonce: any) => {
      nonce = _nonce
    })

    //build transaction
    const txObj = {
      nonce: web3.utils.toHex(nonce),
      to: reqData.to,
      value: web3.utils.toHex(web3.utils.toWei(reqData?.amount?.toString(), "ether")),
      gasLimit: web3.utils.toHex(gasLimit),
      gasPrice: web3.utils.toHex(web3.utils.toWei(gasPrice.toString(), "gwei"))
    }

    //sign transaction
    const tx = new Tx(txObj, { chain: chain })
    tx.sign(privateKeyBuffer);
    const serializeTransaction = tx.serialize()
    const raw = "0x" + serializeTransaction.toString('hex');
    console.log("Raw Transaction: " + raw)

    //broadcast transaction
    await web3.eth.sendSignedTransaction(raw).on('receipt', (transaction: { transactionHash: any; status: any; }) => {
      console.log(`Transaction Processing ReferenceID is :${transaction.transactionHash}`)
      console.log(`Status: ${transaction.status}`)
      transactionReceipt = transaction
    })
    const gif = await fetchGif(reqData.gifKey)
    await TransactionModel.update({
      transactionHash: transactionReceipt!.transactionHash,
      status: transactionReceipt!.status,
      description: reqData.description,
      blockNumber: transactionReceipt!.blockNumber,
      blockHash: transactionReceipt!.blockHash,
      transactionIndex: transactionReceipt!.transactionIndex,
      logsBloom: transactionReceipt!.logsBloom,
      logs: JSON.stringify(transactionReceipt!.logs),
      gif: JSON.stringify(gif)
    }, {
      where: {
        id: txData.id,
        from: senderAccount.address,
        to: reqData.to,
        gas: gasPrice
      }
    })
    return transactionReceipt
  },

  transactionHistoryFromChain: async (reqData: any) => {
    let response = []
    let block = await web3.eth.getBlock('latest');
    let address = reqData.senderAddress?.toLowerCase() || reqData.receiverAddress?.toLowerCase();
    let number = block.number;
    let startBlock = (block.number > reqData.numberOfBlock) ? (block.number - reqData.numberOfBlock) : 0
    let transactions = block.transactions;
    if (block != null && transactions != null) {
      for (let txHash of block.transactions) {
        let tx = await web3.eth.getTransaction(txHash);
        if (address == tx.to.toLowerCase() || address == tx.from.toLowerCase()) {
          response.push(tx);
        }
      }
      for (let iterator = startBlock; iterator < number; iterator++) {
        block = await web3.eth.getBlock(iterator);
        if (block && block.transactions != null) {
          for (let txHash of block.transactions) {
            let tx = await web3.eth.getTransaction(txHash);
            if (address == tx.to.toLowerCase() || address == tx.from.toLowerCase()) {
              response.push(tx);
            }
          }
        }
      }
    }
    return { blockNumber: number, transactions: response }
  },
  transactionHistory: async (reqData: any) => {
    let response = []
    let address = reqData.senderAddress || reqData.receiverAddress;
    let totalTransactions = [], senderTransactions = [], receiverTransactions = [];
    if (!address) {
      totalTransactions = await TransactionModel.findAll({
      })
    }
    else {
      senderTransactions = await TransactionModel.findAll({
        where: {
          from: address
        }
      })

      receiverTransactions = await TransactionModel.findAll({
        where: {
          to: address
        }
      })
    }
    response = [...senderTransactions, ...receiverTransactions, ...totalTransactions]
    return { transactions: response }
  },

  fetchInfo: async (reqData: any) => {
    let transactionData: any, transactionReceipt: any;
    await web3.eth.getTransaction(reqData.transactionHash).then((txData: any) => {
      transactionData = txData;
    });
    await web3.eth.getTransactionReceipt(reqData.transactionHash).then((txReceipt: any) => {
      transactionReceipt = txReceipt;
    })
    const userData = await TransactionModel.findOne({
      where: {
        transactionHash: transactionData!.hash
      }
    })
    return { transactionData, transactionReceipt, userData }
  },
}