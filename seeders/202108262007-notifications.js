'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('notification', [
        { notificationId: 1, content: "Hi! @student3@gmail.com", sender: 'teacher1@gmail.com', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('notification', null, {});
  }
};
