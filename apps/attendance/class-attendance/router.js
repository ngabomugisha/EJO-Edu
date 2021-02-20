import ClassAttendance from './controller';
import express from 'express';
const router = express.Router();

router.post('/', ClassAttendance.create);
router.get('/:classAttendanceId', ClassAttendance.getOneClassAttendance);
router.get('/:slotOnTimetableId/timetable-slot', ClassAttendance.getClassAttendanceBySlotOnTimetable);
router.delete('/:classAttendanceId', ClassAttendance.delete);

module.exports = router;