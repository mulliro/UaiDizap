import { Sequelize } from "sequelize";

export default async (connection: Sequelize, retries = 5, delay = 2000) => {
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