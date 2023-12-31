const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/dbConnection'); 
const { generateRandomNumber } = require('../utils/randomNumberGenerator');

const Token = sequelize.define('Token', {
    tokenID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    hooks: {
      beforeValidate: (token, options) => {
        token.tokenID = generateRandomNumber(60000000, 69999999);
      },
    },
  });


module.exports = Token;