const sequelize = require("../../config/db");
const { DataTypes } = require("sequelize");
export const TransactionModel = sequelize.define("Transaction", {
  date: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  from: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  to: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  transactionHash: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  gas: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  blockNumber: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  gif: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  blockHash: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  logs: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  transactionIndex: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  logsBloom: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  fromImage: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  toImage: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});