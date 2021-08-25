module.exports = (db) => {
    const { 
		StudentModel, 
		EnrolmentModel, 
		TeacherModel,
		NotificationModel
	 } = require('../models')(db);

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
	 * Get students by studentIds
	 * @param {Array} studentId
	 * @returns {Promise<any>}
	 */
     EnrolmentController.getStudentsByIds = async (ids) => {
		const students = await StudentModel.findAll({ where: { studentId: ids } });
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
	 * Get enrolments by teacherIds
	 * @param {Array} teacherId
	 * @returns {Promise<any>}
	 */
	EnrolmentController.getEnrolmentsByTeacherIds = async (ids) => {
		const enrolments = await EnrolmentModel.findAll({ where: { teacherId: ids } });
		return enrolments;
	};

    /**
	 * Register students to teacher
	 * @param {string} teacherEmail
	 * @param {string} studentEmails
	 * @returns {Promise<void>}
	 */
    EnrolmentController.registerStudentsToTeacher = async (teacherEmail, studentEmails) => {
        const teacher = await EnrolmentController.getTeacherByEmail(teacherEmail);
        const teacherId = teacher.dataValues.teacherId
        studentEmails.map(async email => {
			try {
				const student = await StudentModel.create({email})
				const studentId = student.dataValues.studentId
				const enrolment = await EnrolmentModel.create({studentId, teacherId})
				if (!enrolment?.dataValues) {
					Error('Problem occured registering')
				}
			} catch(e) {
				Error(e)
			}
            
        });
    };

	/**
	 * Get students list from teacher notification's mentions and registry lists
	 * @param {string} teacherEmail
	 * @param {string} notification
	 * @returns {Promise<void>}
	 */
	 EnrolmentController.getStudentsFromTeacherNotification = async (teacherEmail, notification) => {
        
    };

    return EnrolmentController;
}
    