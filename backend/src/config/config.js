// require('dotenv').config();
require('dotenv').config({ path: '/app/backend/.env' });
const { resolve } = require('path');
const migrationPath = resolve(__dirname, '../../migrations');

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql",
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    migration: 'json',
    migrationStoragePath: migrationPath,
  },
};