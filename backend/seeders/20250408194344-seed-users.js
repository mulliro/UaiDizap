'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        full_name: 'John Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
        phone_number: '1234567890',
        password_hash: 'hashedpassword123',
        profile_picture: 'https://example.com/profile/johndoe.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: 'Jane Smith',
        username: 'janesmith',
        email: 'janesmith@example.com',
        phone_number: '0987654321',
        password_hash: 'hashedpassword456',
        profile_picture: 'https://example.com/profile/janesmith.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: 'Alice Johnson',
        username: 'alicej',
        email: 'alicej@example.com',
        phone_number: '1122334455',
        password_hash: 'hashedpassword789',
        profile_picture: 'https://example.com/profile/alicej.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};