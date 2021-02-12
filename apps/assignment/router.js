import Assignment from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Assignment.create);
router.put('/:assignmentId', Assignment.update);
router.get('/:classId/:courseId', Assignment.getAllClassCourseAssignmentes);
router.get('/:assignmentId', Assignment.getOneAssignment);
router.delete('/:assignmentId', Assignment.delete);

module.exports = router;