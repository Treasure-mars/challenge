const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/dbConnection'); 

const Product = sequelize.define('Product', {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Product;