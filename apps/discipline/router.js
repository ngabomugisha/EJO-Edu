import Discipline from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Discipline.addStudentDiscipline);
router.put('/comment', Discipline.addComment);
router.get('/:classId/class', Discipline.getClassDiscipline);
router.get('/:studentId/student', Discipline.getStudentDiscipline);
router.delete('/:disciplineId', Discipline.delete);

module.exports = router;