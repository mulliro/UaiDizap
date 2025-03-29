const { resolve } = require('path');

require('dotenv').config({path: resolve(__dirname, '../.env')});

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql",
    port: parseInt(process.env.DB_PORT, 10) || 3306,
  },
};