'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GradeDisciplinas', {
      disciplina_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'disciplinas', key: 'id' },
        onDelete: 'CASCADE',
      },
      grade_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'grades', key: 'id' },
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GradeDisciplinas');
  },
};
