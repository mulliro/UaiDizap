import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

const connection = new Sequelize({
  dialect: 'mysql',
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

export default connection;