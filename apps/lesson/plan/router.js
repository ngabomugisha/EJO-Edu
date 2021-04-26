import Plan from './controller';
import express from 'express';
import publicFilesUploader from '../../../utils/publicFilesUploader'
const router = express.Router();
router.post('/', publicFilesUploader.any(), Plan.create);
router.put('/:planId', Plan.update);
router.put('/:planId/evaluate', Plan.evaluate);
router.get('/:subjectId/subject-plan', Plan.getSubjectPlan);
router.get('/:unitId/unit-plan', Plan.getUnitPlan);
router.get('/:planId', Plan.getOnePlan);
router.get('/:unitId/topic-details', Plan.getTopicDetails);
router.delete('/:planId', Plan.delete);

module.exports = router;