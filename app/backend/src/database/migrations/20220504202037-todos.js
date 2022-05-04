'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      Nome: {
        allowNull: false,
        type: Sequelize.STRING,

      },
      Data: {
        allowNull: false,
        default: Sequelize.NOW,
        type: Sequelize.DATE,
      },
      Hora: {
        allowNull: false,
        type: Sequelize.TIME,
        default: Sequelize.literal('CURRENT_TIME'),
      },
      Titulo: {
        allowNull: false,
        type: Sequelize.STRING({ length: 100 }),
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('todos');
  }
};
