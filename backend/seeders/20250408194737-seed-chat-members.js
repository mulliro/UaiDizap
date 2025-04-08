'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('chat_members', [
      {
        chat_id: 16,
        user_id: 13,
        role: 'member',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_id: 16,
        user_id: 14,
        role: 'member',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_id: 17,
        user_id: 13,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_id: 17,
        user_id: 14,
        role: 'member',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_id: 17,
        user_id: 15,
        role: 'member',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('chat_members', null, {});
  },
};