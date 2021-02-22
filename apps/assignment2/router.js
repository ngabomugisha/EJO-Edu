import Assignment from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Assignment.create);
router.put('/:assignmentId', Assignment.update);
router.get('/:classId/:subjectId', Assignment.getAllClassSubjectAssignmentes);
router.get('/:assignmentId', Assignment.getOneAssignment);
router.delete('/:assignmentId', Assignment.delete);

module.exports = router;