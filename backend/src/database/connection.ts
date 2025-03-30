import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

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

const connectWithRetry = async (retries = 5, delay = 2000) => {
  while (retries > 0) {
    try {
      await connection.authenticate();
      console.log(`
        Database connected successfully.`
      );
      return;
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.error(`Database connection failed: ${ errorMessage }`);
      retries -= 1;
      console.log(`Retrying in ${delay / 1000} seconds... (${ retries } retries left)`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw new Error('Unable to connect to the database after multiple attempts.');
};

connectWithRetry();

export default connection;