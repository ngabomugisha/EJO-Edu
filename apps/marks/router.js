import Marks from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Marks.create);
router.put('/:marksId', Marks.update);
router.get('/:studentId/:subjectId/student-subject-marks', Marks.getStudentSubjectMarks);
router.get('/:studentId/:subjectId/student-subject-marks-stats', Marks.getStudentSubjectMarksStats);
router.get('/:studentId/student-marks-stats', Marks.getStudentMarksStats);
router.get('/:studentId/student-marks-latest', Marks.getStudentMarksLatest);
router.get('/:studentId/student-marks', Marks.getStudentMarks);
router.get('/:assignmentId/assignment-marks', Marks.getAssignmentMarks);
router.get('/:classId/class-marks', Marks.getClassMarks);
router.get('/:classId/:subjectId/class-subject-marks', Marks.getClassMarks);
router.get('/:marksId', Marks.getOneMarks);
router.delete('/:marksId', Marks.delete);

module.exports = router;
