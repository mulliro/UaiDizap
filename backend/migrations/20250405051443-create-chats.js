'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('chats', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      chat_type: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['private', 'group']],
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },{ tableName: 'chats' });
  },

  down: async (queryInterface, __Sequelize) => {
    await queryInterface.dropTable('chats');
  },
};