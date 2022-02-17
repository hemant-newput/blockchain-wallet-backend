
import { MESSAGES } from "../constants/messageConstant";
import { UserService } from "../services/userService";
import { BadRequestError, ValidationException } from "../utils/customError";

export const UserController = {
    registerUser: async (req: any, res: any) => {
        try {
            const reqData = {
                password: req.body.password,
                email: req.body.email,
                userName: req.body.userName || req.body.email,
                profileImage: req.body.profileImage,
                dob: req.body.dateOfBirth,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                address: `${req.body.street} ${req.body.state} ${req.body.country}`,
                position: req.body.position,
            }
            return await UserService.registerUser(reqData);
        } catch (error: any) {
            console.log(error)
            throw new BadRequestError(MESSAGES.ADDRESS_GENERATION_FAILED, error)
        }
    },
    getUsers: async (req: any, res: any) => {
        try {
            const reqData = {
                userName: req.body.userName,
                email: req.body.email
            }
            return await UserService.getUsers(reqData);
        } catch (error: any) {
            console.log(error)
            throw new BadRequestError(MESSAGES.ADDRESS_GENERATION_FAILED, error)
        }
    },
    login: async (req: any, res: any) => {
        try {
            const reqData = {
                password: req.body.password,
                userName: req.body.userName,
            }
            return await UserService.login(reqData);
        } catch (error: any) {
            if (error instanceof BadRequestError || error instanceof ValidationException) {
                throw error
            } else {
                throw new BadRequestError(MESSAGES.ADDRESS_GENERATION_FAILED, error)
            }
        }
    },
    resetPassword: async (req: any, res: any) => {
        try {
            const reqData = {
                "userName": req.body.userName,
                "password": req.body.password,
            }
            return await UserService.resetPassword(reqData);
        } catch (error: any) {
            throw new BadRequestError(MESSAGES.ADDRESS_GENERATION_FAILED, error)
        }
    },
    renewSubscription: async (req: any, res: any) => {
        try {
            const reqData = {
            }
            return await UserService.renewSubscription(reqData);
        } catch (error: any) {
            throw new BadRequestError(MESSAGES.ADDRESS_GENERATION_FAILED, error)
        }
    },
    fillTank: async (req: any, res: any) => {
        try {
            const reqData = {
            }
            return await UserService.fillTank(reqData);
        } catch (error: any) {
            throw new BadRequestError(MESSAGES.ADDRESS_GENERATION_FAILED, error)
        }
    },
    prepareFeed: async (req: any, res: any) => {
        const request = require("request-promise");
        let responseObject = {}
        const comicNames =  [
            // "olo",
            // "test",
            // "gemma",
            // "archie",
            // "connie",
            // "thenib",
            // "tinyview",
            // "matt-bors",
            // "biographic",
            // "itchy-feet",
            // "rob-rogers",
            // "lunarbaboon",
            // "product-plug",
            // "fowl-language",
            // "bite-subscribe",
            // "heart-and-brain",
            // "say-their-names",
            // "frankie-fearless",
            // "in-science-we-trust",
            // "ryan-alexander-tanner",
            "index.json"
        ]
        for (const name of comicNames) {
            const url = `http://localhost:5001/tinyview-dev/us-central1/pullStories`
            const result = await request({
                method: "POST",
                uri: url,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                simple: true,
                json: true,
                body: {
                    data:{
                        "comicName": name
                    }
                },
                resolveWithFullResponse: true,
            })

        

            responseObject = {...responseObject, ...result.body.result}
        }


        return responseObject
    }
}
