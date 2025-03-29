import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const connection = new Sequelize(
  process.env.DB_NAME as string, // Nome do banco de dados
  process.env.DB_USER as string, // Usuário do banco de dados
  process.env.DB_PASSWORD as string, // Senha do banco de dados
  {
    host: process.env.DB_HOST || 'localhost', // Host do banco de dados
    dialect: process.env.DB_DIALECT as 'mysql', // Dialeto do banco
    port: parseInt(process.env.DB_PORT || '3306', 10), // Porta do banco de dados
    logging: false, // Desativa logs de SQL no console
  }
);
(async () => {
  try {
    await connection.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

export default connection;