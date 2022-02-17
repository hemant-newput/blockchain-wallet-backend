
import { MESSAGES } from "../constants/messageConstant";
import { fetchGif, fetchUserPrivateKey } from "../helpers/helper";
import { WalletService } from "../services/walletService";
import { BadRequestError, ValidationException } from "../utils/customError";

export const WalletController = {
  getBalance: async (req: any, res: any) => {
    try {
      const reqData = {
        address: req.body.address
      }
      return await WalletService.getBalance(reqData);
    } catch (error: any) {
      throw new BadRequestError(MESSAGES.BALANCE_FETCH_FAILED, error)
    }
  },
  sendMoney: async (req: any, res: any) => {
    try {
      const reqData = {
        "amount": req.body.amount,
        "to": req.body.to || req.body.address,
        "userKey": req.body.userKey,
        "gifKey": req.body.gifKey,
        "description": req.body.description
      }
      if (!reqData.userKey) {
        reqData.userKey = await fetchUserPrivateKey(req.body.userID)
      }
      return await WalletService.sendMoney(reqData);
    } catch (error: any) {
      console.log(error)
      throw new BadRequestError(MESSAGES.SEND_MONEY_FAILED, error)
    }
  },
  transactionHistoryFromChain: async (req: any, res: any) => {
    try {
      const reqData = {
        "numberOfBlock": req.body.numberOfBlock,
        "senderAddress": req.body.senderAddress,
        "receiverAddress": req.body.receiverAddress,
      }
      if (reqData.senderAddress && reqData.receiverAddress) {
        throw new ValidationException(MESSAGES.MULTIPLE_ADDRESS_DETECTED)
      }
      return await WalletService.transactionHistoryFromChain(reqData);
    } catch (error: any) {
      console.log(error)
      throw new BadRequestError(MESSAGES.TRANSACTION_HISTORY_FAILED, error)
    }
  },
  transactionHistory: async (req: any, res: any) => {
    try {
      const reqData = {
        "numberOfBlock": req.body.numberOfBlock,
        "senderAddress": req.body.senderAddress,
        "receiverAddress": req.body.receiverAddress,
      }
      if (reqData.senderAddress && reqData.receiverAddress) {
        throw new ValidationException(MESSAGES.MULTIPLE_ADDRESS_DETECTED)
      }
      return await WalletService.transactionHistory(reqData);
    } catch (error: any) {
      console.log(error)
      throw new BadRequestError(MESSAGES.TRANSACTION_HISTORY_FAILED, error)
    }
  },

  fetchInfo: async (req: any, res: any) => {
    try {
      const reqData = {
        transactionHash: req.body.transactionHash
      }
      return await WalletService.fetchInfo(reqData);
    } catch (error: any) {
      throw new BadRequestError(MESSAGES.FETCH_INFO_FAILED, error)
    }
  },
  fetchGif: async (req: any, res: any) => {
    return await fetchGif(req.body.search)
  }

}
