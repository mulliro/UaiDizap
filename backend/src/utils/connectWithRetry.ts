import { Sequelize } from "sequelize";
import logger from './logger';

export default async (connection: Sequelize, retries = 5, delay = 2000) => {
    while (retries > 0) {
      try {
        await connection.authenticate();
        logger.info(`Database connected successfully.`);
        return;
      } catch (error) {
        const errorMessage = (error as Error).message;
        logger.info(`Database connection failed: ${ errorMessage }`);
        retries -= 1;
        logger.info(`Retrying in ${delay / 1000} seconds... (${ retries } retries left)`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
    throw new Error('Unable to connect to the database after multiple attempts.');
  };