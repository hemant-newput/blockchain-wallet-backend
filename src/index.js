const Web3 = require("web3")

// const url = "https://mainnet.infura.io/v3/5ad7f77f229745eb8c14f0f4bfa15cd3"
const url = "https://ropsten.infura.io/v3/5ad7f77f229745eb8c14f0f4bfa15cd3"
const web3 = new Web3(url)

// const address = "0x00000000219ab540356cBB839Cbe05303d7705Fa"
// web3.eth.getBalance(address,(err,balance)=>{
//     if(!err){
//         console.log(`Balance of account is ${balance} wei or ${web3.utils.fromWei(balance,"ether")} ethers`)
//     }
// })
// **************************************************************************************************

// const myNewAccount = web3.eth.accounts.create()
// console.log(myNewAccount)
// **************************************************************************************************

const ganacheUrl = "http://127.0.0.1:7545"

// const web3Local = new Web3(ganacheUrl)
// const localAddress = "0x5F6b977381EE22944E5951563580e256Db843ef2"
// web3Local.eth.getBalance(localAddress,(err,balance)=>{
//     if(!err){
//         console.log(`Balance of account at your local chain is ${balance} wei or ${web3.utils.fromWei(balance,"ether")} ethers`)
//     }
// })
// **************************************************************************************************

// ? SHIB INU
// var abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"totalSupply","type":"uint256"},{"name":"feeReceiver","type":"address"},{"name":"tokenOwnerAddress","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]
// var contractAddress = "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE"

// var contract = new web3.eth.Contract(abi,contractAddress)
// contract.methods.name().call((err,name)=>{
//     console.log(`Name of Token is ${name}`)
// })
// contract.methods.symbol().call((err,symbol)=>{
//     console.log(`Symbol of Token is ${symbol}`)
// })
// contract.methods.totalSupply().call((err,supply)=>{
//     console.log(`Total Supply of Token is ${supply}`)
// })

// contract.methods.balanceOf("0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE").call((err,balance)=>{
//     console.log(`Balance of 0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE is ${balance}`)
// })
// **************************************************************************************************

// ? send Money

// const ganacheWeb3 = new Web3(ganacheUrl);
// const account1 = "0x8bc8533431A2e6cb066E0e98649ae75aF3bA733D"
// const account2 = "0xc22fA5Cf4eE20441bB4748735a46aD396E979EEb"

// ganacheWeb3.eth.getBalance(account1, (err, balance) => {
//     console.log(`Balance of Account 1 ${account1} is ${balance}`)
// })

// ganacheWeb3.eth.getBalance(account2, (err, balance) => {
//     console.log(`Balance of Account 2 ${account2} is ${balance}`)
// })

// ganacheWeb3.eth.sendTransaction({ from: account1, to: account2, value: web3.utils.toWei("1", "ether") }, (err, data) => {
//    if(!err){
//     console.log(`Transaction Processing ReferenceID is : ${data}`)
//     ganacheWeb3.eth.getBalance(account1, (err, balance) => {
//         console.log(`Balance of Account 1 ${account1} is ${balance}`)
//     })
//     ganacheWeb3.eth.getBalance(account2, (err, balance) => {
//         console.log(`Balance of Account 2 ${account2} is ${balance}`)
//     })
//    }
// })

// **************************************************************************************************

// const Tx = require('ethereumjs-tx').Transaction

// const account1 = {
//     address: "0xf0DebA4d74b8A5863CbB14Ed16ae1b8A32F4179f",
//     privateKey: 'dfd48a96784e5b0c73c7aa00bb2ace4029fa5fbb429e6372b2dac9c370d5597d'
// }
// const account2 = {
//     address: '0xf660868127293D39A8A39a5cF660e74F582EEEdc',
//     privateKey: '0x6080c6351f61ce59624336be53a9390ba60e1a5b867d5ba1e5afef5f2bfe7c36'
// }

// web3.eth.getBalance(account1.address, (err, balance) => {
//     console.log(`Balance of Account 1 ${account1.address} is ${balance}`)
// })

// web3.eth.getBalance(account2.address, (err, balance) => {
//     console.log(`Balance of Account 2 ${account2.address} is ${balance}`)
// })

// const privateKeyBuffer1 = Buffer.from(account1.privateKey, 'hex')
// const privateKeyBuffer2 = Buffer.from(account2.privateKey,'hex')

// web3.eth.getTransactionCount(account1.address, (data, nonce) => {

//     //build transaction
//     const txObj = {
//         nonce: web3.utils.toHex(nonce),
//         to: account2.address,
//         value: web3.utils.toHex(web3.utils.toWei("0.2", "ether")),
//         gasLimit: web3.utils.toHex(21000),
//         gasPrice: web3.utils.toHex(web3.utils.toWei("20", "gwei"))
//     }
//     //sign transaction
//     const tx = new Tx(txObj, {chain: "ropsten"})
//     tx.sign(privateKeyBuffer1);
//     const serializeTransaction = tx.serialize()
//     const raw = "0x"+ serializeTransaction.toString('hex');
//     console.log(raw)
//     //broadcast transaction
//     web3.eth.sendSignedTransaction(raw).on('receipt',(transaction)=>{
//         console.log(`Transaction Processing ReferenceID is :${transaction.transactionHash}`)
//         console.log(`Status: ${transaction.status}`)
//     })

// })

// **************************************************************************************************


// const Tx = require('ethereumjs-tx').Transaction

// const account1 = {
//     address: "0xf0DebA4d74b8A5863CbB14Ed16ae1b8A32F4179f",
//     privateKey: 'dfd48a96784e5b0c73c7aa00bb2ace4029fa5fbb429e6372b2dac9c370d5597d'
// }

// web3.eth.getBalance(account1.address, (err, balance) => {
//     console.log(`Balance of Account 1 ${account1.address} is ${balance}`)
// })

// const privateKeyBuffer1 = Buffer.from(account1.privateKey, 'hex')

// web3.eth.getTransactionCount(account1.address, (data, nonce) => {

//     //build transaction
//     const txObj = {
//         nonce: web3.utils.toHex(nonce),
//         gasLimit: web3.utils.toHex(2000000),
//         data: "0x608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632e64cec11461003b5780636057361d14610059575b600080fd5b610043610075565b60405161005091906100d9565b60405180910390f35b610073600480360381019061006e919061009d565b61007e565b005b60008054905090565b8060008190555050565b60008135905061009781610103565b92915050565b6000602082840312156100b3576100b26100fe565b5b60006100c184828501610088565b91505092915050565b6100d3816100f4565b82525050565b60006020820190506100ee60008301846100ca565b92915050565b6000819050919050565b600080fd5b61010c816100f4565b811461011757600080fd5b5056fea2646970667358221220404e37f487a89a932dca5e77faaf6ca2de3b991f93d230604b1b8daaef64766264736f6c63430008070033",
//         gasPrice: web3.utils.toHex(web3.utils.toWei("20", "gwei"))
//     }
//     //sign transaction
//     const tx = new Tx(txObj, {chain: "ropsten"})
//     tx.sign(privateKeyBuffer1);
//     const serializeTransaction = tx.serialize()
//     const raw = "0x"+ serializeTransaction.toString('hex');
//     console.log(raw)
//     //broadcast transaction
//     web3.eth.sendSignedTransaction(raw).on('receipt',(transaction)=>{
//         console.log(`Transaction Processing ReferenceID is :${transaction.transactionHash}`)
//         console.log(`Status: ${transaction.status}`)
//     })

// })
// **************************************************************************************************

// const contractAddress = "0x0F7270c06Cd1c39960c40BFAEef410B1F4134A73"
// const contractAbi = [{ "inputs": [], "name": "retrieve", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "num", "type": "uint256" }], "name": "store", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]


// const contractInstance = new web3.eth.Contract(contractAbi, contractAddress)

// contractInstance.methods.store(20).call((err, data) => {
//     console.log(data)
//     contractInstance.methods.retrieve().call((err, data) => {
//         console.log(data)
//     })
// })
// **************************************************************************************************



// const newAccount = web3.eth.accounts.create()
// const newAccount = {
//     address: '0x2a2fd4bF6843C0FA57D1Dc738c1965f415937184',
//     privateKey: '0xc589a4e91aec520530b9cc840cfd0ac731d7b0601584faedf36f607139b57fa6',
// }
// const encryptedData = web3.eth.accounts.encrypt(newAccount.privateKey, "hemant")
// const decrptedData = web3.eth.accounts.decrypt(encryptedData, "hemant")

// const myWallet = web3.eth.accounts.wallet.create(20)
// console.log(myWallet)
// const myEncryptedWallet = web3.eth.accounts.wallet.encrypt("hemant")
// console.log(myEncryptedWallet)
// const decryptedWallet =  web3.eth.accounts.wallet.decrypt(myEncryptedWallet,"hemant")
// console.log(decryptedWallet)
// **************************************************************************************************



const request = require("request-promise");

const gasPrice = "https://ethgasstation.info/json/ethgasAPI.json"

request({
    method: "GET",
    uri: gasPrice,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    simple: true,
    json: true,
    resolveWithFullResponse: true,
}).then((response) => {
    console.log(response.body)
})
