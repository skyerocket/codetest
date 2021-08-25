module.exports = (db) => {
    const { StudentModel, EnrolmentModel, TeacherModel } = require('../models')(db);

    let EnrolmentController = {};

    /**
	 * Get student by email
	 * @param {string} email
	 * @returns {Promise<any>}
	 */
    EnrolmentController.getStudentByEmail = async (email) => {
		const student = await StudentModel.findOne({ where: { email } });
		return student;
	};

	/**
	 * Get students by emails
	 * @param {Array} emails
	 * @returns {Promise<any>}
	 */
    EnrolmentController.getStudentsByEmails = async (emails) => {
		const students = await StudentModel.findAll({ where: { email: emails } });
		return students;
	};

    /**
	 * Get teacher by email
	 * @param {string} email
	 * @returns {Promise<any>}
	 */
	EnrolmentController.getTeacherByEmail = async (email) => {
		const teacher = await TeacherModel.findOne({ where: { email } });
		return teacher;
	};

	/**
	 * Get teachers by emails
	 * @param {Array} emails
	 * @returns {Promise<any>}
	 */
	EnrolmentController.getTeachersByEmails = async (emails) => {
		const teachers = await TeacherModel.findAll({ where: { email: emails } });
		return teachers;
	};

    /**
	 * Register students to teacher
	 * @param {string} teacherEmail
	 * @param {string} studentEmails
	 * @returns {Promise<void>}
	 */
    EnrolmentController.registerStudentsToTeacher = async (teacherEmail, studentEmails) => {
        const teacher = await EnrolmentController.getTeacherByEmail(teacherEmail);
        console.log(teacher)
        const students = await EnrolmentController.getStudentsByEmails(studentEmails);
    };

    return EnrolmentController;
}
    