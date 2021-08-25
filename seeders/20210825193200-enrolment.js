'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('enrolment', [
        { enrolId: 1, studentId: 1, teacherId: 1, createdAt: new Date(), updatedAt: new Date() },
        { enrolId: 2, studentId: 2, teacherId: 1, createdAt: new Date(), updatedAt: new Date() },
        { enrolId: 3, studentId: 3, teacherId: 2, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('student', null, {});
  }
};