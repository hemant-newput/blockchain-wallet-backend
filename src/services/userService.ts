import { BadRequestError, ValidationException } from "../utils/customError"
import { UserModel } from "../models/user.model"
import { getNetwork } from "../helpers/helper"
import { defaultUserImage, encryptingKey } from "../../config/appConfig"
import Op from "sequelize/lib/operators"
const Web3 = require("web3")
const web3 = new Web3(getNetwork())
export const UserService = {
  registerUser: async (reqData: any) => {
    const existingUser = await UserModel.findOne({
      where: {
        email: reqData.email
      }
    })
    if (existingUser) {
      throw new BadRequestError("User Already Exist in DataStore")
    }
    const myNewAccount = web3.eth.accounts.create()
    console.log(myNewAccount)
    const encryptedAccount = web3.eth.accounts.encrypt(myNewAccount.privateKey, encryptingKey)
    console.log(encryptedAccount)
    const userData = {
      password: reqData.password,
      email: reqData.email,
      userName: reqData.userName,
      token: reqData.token,
      key: JSON.stringify(encryptedAccount),
      walletAddress: myNewAccount.address,
      profileImage: reqData.profileImage || defaultUserImage,
      dob: reqData.dob,
      firstName: reqData.firstName,
      lastName: reqData.lastName,
      address: reqData.address,
      position: reqData.position,
    }
    return await UserModel.create(userData)
  },
  getUsers: async (reqData: any) => {
    let whereObj: any = {};
    if (reqData.userName) {
      whereObj['userName'] = { [Op.like]: "%" + reqData.userName + "%" }
    }
    if (reqData.email) {
      whereObj['email'] = { [Op.like]: "%" + reqData.email + "%" }
    }
    return await UserModel.findAll({
      where: whereObj
    })
  },
  login: async (reqData: any) => {
    const existingUser = await UserModel.findOne({
      where: {
        userName: reqData.userName
      }
    })
    if (!existingUser) {
      throw new BadRequestError("User Not Found in DataStore")
    }
    const passwordValidated = reqData.password == existingUser.password
    if(!passwordValidated){
      throw new ValidationException("Invalid Password")
    }
    return existingUser
  },
  resetPassword: async (reqData: any) => {
    const existingUser = await UserModel.findOne({
      where: {
        userName: reqData.userName
      }
    })
    if (!existingUser) {
      throw new BadRequestError("User Not Found in DataStore")
    }
    await UserModel.update({ password: reqData.password }, {
      where: {
        userName: reqData.userName
      }
    })
    return { "message": "Password Updated" }
  },
  fillTank: async (reqData: any) => {
    return true
  },
  renewSubscription: async (reqData: any) => {
    return true
  }
}

