'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('chats', [
      {
        chat_type: 'private',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_type: 'group',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_type: 'private',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('chats', null, {});
  },
};