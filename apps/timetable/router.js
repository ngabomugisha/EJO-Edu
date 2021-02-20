import Timetable from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Timetable.create);
router.put('/:timetableId', Timetable.update);
router.get('/:classId/:teacherId/class-teacher', Timetable.getAllClassTeacherTimetable);
router.get('/:classId/class', Timetable.getAllClassTimetable);
router.get('/:classId/:teacherId/:subjectId/class-teacher-subject', Timetable.getAllClassTeacherSubjectTimetable);
router.get('/:timetableId', Timetable.getOneTimetableSlot);
router.delete('/:timetableId', Timetable.delete);

module.exports = router;