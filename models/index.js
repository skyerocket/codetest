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

  return {
    db,
    TeacherModel: Teacher
  }
}
