// require('dotenv').config();
require('dotenv').config({ path: '/app/backend/.env' });
const { resolve } = require('path');
const migrationPath = resolve(__dirname, '../../migrations');

console.log('DB_USER c:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('REDIS_HOST:', process.env.REDIS_HOST);
console.log('JWT_SECRET:', process.env.JWT_SECRET);

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