'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('enrolment', {
      enrolId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      studentId: { type: Sequelize.INTEGER, allowNull: false },
      teacherId: { type: Sequelize.INTEGER, allowNull: false },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('enrolment');
  }
};