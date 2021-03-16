import Participation from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Participation.create);
router.put('/:participationId', Participation.addStudentParticipation);
router.put('/:participationId/comment', Participation.addComment);
router.get('/:classId', Participation.getClassParticipation);
router.delete('/:participationId', Participation.delete);

module.exports = router;