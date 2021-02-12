import Unit from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Unit.create);
router.put('/:unitId', Unit.update);
router.get('/:subTopicId/subTopic-units', Unit.getAllSubTopicUnits);
router.get('/:unitId', Unit.getOneUnit);
router.delete('/:unitId', Unit.delete);

module.exports = router;