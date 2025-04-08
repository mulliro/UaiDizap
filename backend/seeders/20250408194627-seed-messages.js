'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('messages', [
      {
        chat_id: 16,
        sender_id: 13,
        content: 'Hello, how are you?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_id: 16,
        sender_id: 14,
        content: 'I am fine, thank you!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_id: 17,
        sender_id: 15,
        content: 'Welcome to the group!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('messages', null, {});
  },
};