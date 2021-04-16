import Participation from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Participation.create);
router.put('/:participationId', Participation.addStudentParticipation);
router.put('/:studentId/comment', Participation.addComment);
router.get('/:classId/:subject', Participation.getClassParticipation);
router.get('/:studentId/:subjectId/:classId/student-comments', Participation.getStudentComments);
router.get('/:studentId/:subjectId/:classId/student-participation', Participation.getStudentParticipation);
router.delete('/:participationId', Participation.delete);

module.exports = router;