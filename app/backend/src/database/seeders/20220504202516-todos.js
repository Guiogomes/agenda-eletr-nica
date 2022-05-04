'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('todos', [{
      id: 1,
      Nome: 'Cozinhar',
      Data: new Date('2022-05-05'),
      Hora: new Date(),
      Titulo: 'Cozinhar',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('todos', null, {});
  }
};
