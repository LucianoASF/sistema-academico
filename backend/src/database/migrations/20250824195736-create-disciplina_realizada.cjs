'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('disciplinas_realizadas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      disciplina_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'disciplinas', key: 'id' },
        onDelete: 'CASCADE',
      },
      professor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'usuarios', key: 'id' },
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('disciplinas_realizadas');
  },
};
