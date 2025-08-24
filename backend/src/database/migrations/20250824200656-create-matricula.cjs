'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      presenca_final: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      nota_final: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },

      disciplina_realizada_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'disciplinas_realizadas', key: 'id' },
        onDelete: 'CASCADE',
      },
      aluno_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'usuarios', key: 'id' },
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('matriculas');
  },
};
