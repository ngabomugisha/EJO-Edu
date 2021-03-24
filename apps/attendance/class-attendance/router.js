import ClassAttendance from './controller';
import express from 'express';
const router = express.Router();

router.post('/', ClassAttendance.create);
router.get('/:classAttendanceId', ClassAttendance.getOneClassAttendance);
router.get('/:classId/class', ClassAttendance.getAllClassAttendances);
router.get('/:classId/:subjectId/class-subject', ClassAttendance.getAllSubjectClassAttendances);
router.get('/:studentId/student', ClassAttendance.getOneStudentAttendance);
router.get('/:studentId/:subjectId/student-subject', ClassAttendance.getOneStudentAttendanceBySubject);
router.get('/:slotOnTimetableId/timetable-slot', ClassAttendance.getClassAttendanceBySlotOnTimetable);
router.delete('/:classAttendanceId', ClassAttendance.delete);

module.exports = router;