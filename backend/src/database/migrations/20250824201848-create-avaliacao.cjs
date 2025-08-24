'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('avaliacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(60),
      },
      valor: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      disciplina_realizada_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'disciplinas_realizadas', key: 'id' },
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('avaliacoes');
  },
};
