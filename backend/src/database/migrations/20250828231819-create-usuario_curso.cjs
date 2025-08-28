'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuario_cursos', {
      aluno_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'usuarios', key: 'id' },
        onDelete: 'CASCADE',
      },
      curso_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'cursos', key: 'id' },
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario_cursos');
  },
};
