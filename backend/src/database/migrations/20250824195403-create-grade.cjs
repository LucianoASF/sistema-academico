'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('grades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      versao: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      curso_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'cursos', key: 'id' },
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('grades');
  },
};
