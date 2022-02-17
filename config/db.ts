const Sequelize = require("sequelize");

const database = new Sequelize({
  dialect: "sqlite",
  storage: "wallet.sqlite3",
});

module.exports = database;