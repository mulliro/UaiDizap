import 'dotenv/config';
import { Sequelize } from 'sequelize';
import connectWithRetry from '../utils/connectWithRetry';

const connection = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT as 'mysql',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    logging: false,
  }
);

connectWithRetry(connection);

export default connection;