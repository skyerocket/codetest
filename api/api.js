const express = require('express')
const router = express.Router()
const h = require('../helpers')

module.exports = (db) => {

	const EnrolmentController = require('../controllers/enrolment')(db);

	/**
	 * @api {post} /api/register
	 * @apiName RegisterStudentsToTeacher
	 * @apiVersion 1.0.0
	 * @apiGroup Api
	 * @apiDescription As a teacher, I want to register one or more students to a specified teacher.
	 * @apiParam {String} teacher Teacher's email address
	 * @apiParam {String[]} students Students' email addresses
	 */
	router.post('/register', async (req, res) => {
		try {
			const teacherEmail = req.body.teacher;
			const studentsEmails = req.body.students;

			if (!teacherEmail) throw new Error('Teacher missing');
			if (!studentsEmails || studentsEmails.length === 0) throw new Error('Students missing');

			await EnrolmentController.registerStudentsToTeacher(teacherEmail, studentsEmails);

			return h.api.createApiRes(req, res, 204, 'Students registered to teacher successfully');
		} catch (err) {
			return h.api.createApiRes(req, res, 500, err.message);
		}
	});

	/**
	 * @api {get} /api/getcommonstudents
	 * @apiName GetCommonStudents
	 * @apiVersion 1.0.0
	 * @apiGroup Api
	 * @apiDescription As a tutor, I want to retrieve a list of students common to a given list of tutors
	 * @apiParam {String} teacher Teacher's email address
	 */
	 router.get('/getcommonstudents', async (req, res) => {
		try {
			const teacherEmails = Object.keys(req.query);
			console.log(teacherEmails)
			// const studentsEmails = req.body.students;

			// if (!teacherEmail) throw new Error('Teacher missing');
			// if (!studentsEmails || studentsEmails.length === 0) throw new Error('Students missing');

			// await TeacherController.registerStudentsToTeacher(teacherEmail, studentsEmails);

			// return h.api.createApiRes(req, res, 204, 'Students registered to teacher successfully');
		} catch (err) {
			return h.api.createApiRes(req, res, 500, err.message);
		}
	});

	return router;

}
