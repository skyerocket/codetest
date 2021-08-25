'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('notification', {
        notificationId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        content: { type: Sequelize.TEXT, allowNull: false },
        sender: { type: Sequelize.STRING, allowNull: false },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('notification');
  }
};
