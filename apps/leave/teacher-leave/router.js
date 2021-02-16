import TeacherLeave from './controller';
import express from 'express';
const router = express.Router();

router.post('/', TeacherLeave.create);
router.put('/:teacherLeaveId', TeacherLeave.update);
router.get('/:schoolId/school-teacher-leaves', TeacherLeave.getSchoolTeacherLeaves);
router.get('/:teacherLeaveId', TeacherLeave.getOneTeacherLeave);
router.delete('/:teacherLeaveId', TeacherLeave.delete);

module.exports = router;