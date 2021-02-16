import StudentAssigment from './controller';
import express from 'express';
const router = express.Router();

router.post('/', StudentAssigment.create);
router.put('/:studentAssigmentId', StudentAssigment.update);
router.get('/:classId/:subjectId', StudentAssigment.getAllClassSubjectStudentAssigmentes);
router.get('/:studentAssigmentId', StudentAssigment.getOneStudentAssigment);
router.delete('/:studentAssigmentId', StudentAssigment.delete);

module.exports = router;