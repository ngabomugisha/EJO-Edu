import Unit from './controller';
import express from 'express';
import publicFilesUploader from '../../../utils/publicFilesUploader'
const router = express.Router();

router.post('/', Unit.create);
router.put('/:unitId', Unit.update);
router.put('/:unitId/add-file', publicFilesUploader.fields([{name: 'file'}]), Unit.addFile);
router.get('/:subTopicId/subTopic-units', Unit.getAllSubTopicUnits);
router.get('/:topicId/topic-units', Unit.getAllTopicUnits);
router.get('/:unitId', Unit.getOneUnit);
router.delete('/:unitId', Unit.delete);

module.exports = router;