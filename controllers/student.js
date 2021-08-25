module.exports = (db) => {
	const { StudentModel } = require('../models')(db);

	let StudentController = {};

	/**
	 * Get student by email
	 * @param {string} email
	 * @returns {Promise<any>}
	 */
	StudentController.getByEmail = async (email) => {
		const student = await StudentModel.findOne({ where: { email } });
		return student;
	};

	/**
	 * Get students by emails
	 * @param {Array} emails
	 * @returns {Promise<any>}
	 */
	StudentController.getByEmails = async (emails) => {
		const students = await StudentModel.findAll({ where: { email: emails } });
		return students;
	};

	return StudentController;
}
