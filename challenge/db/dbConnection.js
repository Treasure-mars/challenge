const { Sequelize } = require('sequelize');
require('dotenv').config

const sequelize = new Sequelize('challenge', 'Tresor', 'tmars', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = { sequelize };