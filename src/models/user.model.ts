const sequelize = require("../../config/db");
const { DataTypes } = require("sequelize");

export const UserModel = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  userName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  key: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  walletAddress: {
    type: DataTypes.TEXT,
    allowNull : true
  },
  profileImage: {
    type: DataTypes.TEXT,
    allowNull : true
  },

  dob: {
    type: DataTypes.TEXT,
    allowNull : true
  },

  firstName: {
    type: DataTypes.TEXT,
    allowNull : true
  },

  lastName: {
    type: DataTypes.TEXT,
    allowNull : true
  },

  address: {
    type: DataTypes.TEXT,
    allowNull : true
  },

  position: {
    type: DataTypes.TEXT,
    allowNull : true
  },
});
