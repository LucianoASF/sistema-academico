'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('presencas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      presente: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },

      matricula_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'matriculas', key: 'id' },
        onDelete: 'CASCADE',
      },
      aula_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'aulas', key: 'id' },
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('presencas');
  },
};
