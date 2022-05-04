'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Data: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      Hora: {
        defaultValue: Sequelize.fn('NOW'),
        type: Sequelize.DATE,
      },
      Titulo: {
        type: Sequelize.STRING({ length: 100 }),
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('todos');
  }
};
