import StudentLeave from './controller';
import express from 'express';
const router = express.Router();

router.post('/', StudentLeave.create);
router.put('/:studentLeaveId', StudentLeave.update);
router.get('/:schoolId/school-student-leaves', StudentLeave.getSchoolStudentLeaves);
router.get('/:studentLeaveId', StudentLeave.getOneStudentLeave);
router.delete('/:studentLeaveId', StudentLeave.delete);

module.exports = router;