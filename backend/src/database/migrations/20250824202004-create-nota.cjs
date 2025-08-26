'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      valor_obtido: {
        allowNull: false,
        type: Sequelize.DECIMAL(4, 2),
      },

      matricula_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'matriculas', key: 'id' },
        onDelete: 'CASCADE',
      },
      avaliacao_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'avaliacoes', key: 'id' },
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('notas');
  },
};
