const db = require("./db");
import { UserModel } from "../src/models/user.model"
import { defaultUserImage } from "./appConfig";

export const seed = async () => {
  await db.sync({ force: true });

  const password = `Hemant1@`;
  const userName = "hemant";
  const email = "hemant@newput.com";
  const key = "105d4798c477c19b94980a28d347a6c5f203db0293e620ff16e5dafcb66203bc"
  const walletAddress = "0x24E5db077044066D33572B5Da85F6e1706Aa3229"
  const profileImage = defaultUserImage
  const dob = "1998-09-06";
  const firstName = "Hemant";
  const lastName = "Shrivastava";
  const address = "1227 rasulabad haujpatti miranpur akbarpur";
  const position = "Software Developer";

  UserModel.create({
    password: password,
    email: email,
    userName: userName,
    key: key,
    walletAddress: walletAddress,
    profileImage: profileImage,
    dob, firstName, lastName, address, position

  })
    .then((user: { email: any; }) => {
      console.log("seeded user", user);
      UserModel.findOne({ where: { email: `${user.email}` } })
        .then((user: any) => {
          console.log("found in db after adding");
          db.close();
        })
        .catch((error: any) => {
          console.error("error looking for new user in db: ", error);
          db.close();
        });
    })
    .catch((error: any) => {
      console.error("failed to seed, ", error);
      db.close();
    });
};