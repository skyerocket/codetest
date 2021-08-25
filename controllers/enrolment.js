module.exports = (db) => {
    const { EnrolmentModel } = require('../models')(db);
    const TeacherController  = require('./teacher');
    const StudentController = require('./student');
    
    let EnrolmentController = {};

    /**
	 * Register students to teacher
	 * @param {string} teacherEmail
	 * @param {string} studentEmails
	 * @returns {Promise<void>}
	 */
    EnrolmentController.registerStudentsToTeacher = async (teacherEmail, studentEmails) => {
        const teacher = await TeacherController.getByEmail(teacherEmail);
        console.log(teacher)
        studentEmails.forEach(async email => {
            const student = await StudentController.getByEmail(email);
        });
    };

    return EnrolmentController;
}
    