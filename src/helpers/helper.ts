import { GANACHE_URL, giphyAPIKey, MAINNET_URL, ROPSTEN_URL } from "../../config/appConfig"
import { UserModel } from "../models/user.model";
import { ValidationException } from "../utils/customError";

export const getNetwork = () => {
    return GANACHE_URL || ROPSTEN_URL || MAINNET_URL
}

export const calculateGasPrice = async () => {
    const request = require("request-promise");
    let gasPrice: any;
    const gasPriceURl = "https://ethgasstation.info/json/ethgasAPI.json"
    await request({
        method: "GET",
        uri: gasPriceURl,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        simple: true,
        json: true,
        resolveWithFullResponse: true,
    }).then((response: { body: any; }) => {
        console.log(response.body)
        gasPrice = response.body;
    })
    return gasPrice!.average;

}
export const fetchGif = async (key: string) => {
    const request = require("request-promise");
    let gif: any;
    const gasPriceURl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&limit=1&q=${key}`
    await request({
        method: "GET",
        uri: gasPriceURl,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        simple: true,
        json: true,
        resolveWithFullResponse: true,
    }).then((response: { body: any; }) => {
        console.log(response.body)
        gif = response.body;
    })
    return {
        alt: gif?.data[0]?.title || gif?.data[0]?.user?.display_name,
        text: key,
        url: gif?.data[0]?.images?.downsized?.url
    }

}
export const fetchUserPrivateKey = async(userID: any)=>{
    const userData = await UserModel.findOne({
        where: {
            id: userID
        }
    })
    console.log(userData)
    if(!userData.key){
        throw new ValidationException("Invalid User: Private Key Does not Exist")
    }
    return userData.key
}