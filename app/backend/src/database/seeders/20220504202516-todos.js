'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('todos', [{
      Nome: 'Cozinhar',
      Data: '2022-05-05',
      Hora: '20:00:00',
      Titulo: 'Cozinhar',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('todos', null, {});
  }
};
