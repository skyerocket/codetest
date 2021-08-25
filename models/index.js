const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const constant = require('../config/constant.json');

module.exports = (db) => {

  class Teacher extends Model {}
  Teacher.init({
    teacherId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: Sequelize.STRING, allowNull: false },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }, {
    sequelize: db,
    freezeTableName: true,
    modelName: 'teacher',
    tableName: 'teacher'
  });

  class Student extends Model {}
  Student.init({
    studentId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: Sequelize.STRING, allowNull: false },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }, {
    sequelize: db,
    freezeTableName: true,
    modelName: 'student',
    tableName: 'student'
  });

  class Enrolment extends Model {}
  Enrolment.init({
    enrolId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    studentId: { type: Sequelize.INTEGER, allowNull: false },
    teacherId: { type: Sequelize.INTEGER, allowNull: false },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }, {
    sequelize: db,
    freezeTableName: true,
    modelName: 'enrolment',
    tableName: 'enrolment'
  });

  class Notification extends Model {}
  Notification.init({
    notificationId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    content: { type: Sequelize.TEXT, allowNull: false },
    sender: { type: Sequelize.STRING, allowNull: false },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }, {
    sequelize: db,
    freezeTableName: true,
    modelName: 'enrolment',
    tableName: 'enrolment'
  });

  return {
    db,
    TeacherModel: Teacher,
    StudentModel: Student,
    EnrolmentModel : Enrolment,
    NotificationModel: Notification
  }
}
