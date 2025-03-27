import sequelize from './connection';
import User from '../models/User';

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Use { force: true } apenas em desenvolvimento!
    console.log('Database synchronized!');
  } catch (error) {
    console.error('Error syncing the database:', error);
  }
};

syncDatabase();