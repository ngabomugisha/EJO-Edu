import Participation from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Participation.create);
router.put('/:participationId', Participation.addStudentParticipation);
router.get('/', Participation.getClassParticipation);
router.delete('/:participationId', Participation.delete);

module.exports = router;