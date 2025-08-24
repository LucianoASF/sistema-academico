'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aulas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      descricaco: {
        allowNull: false,
        type: Sequelize.STRING(100),
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
    await queryInterface.dropTable('aulas');
  },
};
