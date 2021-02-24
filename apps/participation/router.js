import Participation from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Participation.create);
router.put('/:participationId', Participation.addStudentParticipation);
router.get('/:participationId', Participation.getOneParticipation);
router.delete('/:participationId', Participation.delete);

module.exports = router;