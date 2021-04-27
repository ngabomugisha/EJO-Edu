import Plan from './controller';
import express from 'express';
import publicFilesUploader from '../../../utils/publicFilesUploader'
const router = express.Router();
router.post('/', publicFilesUploader.any(), Plan.create);
router.put('/:planId', Plan.update);
router.put('/:planId/evaluate', Plan.evaluate);
router.get('/:subjectId/:classId/subject-plan', Plan.getSubjectPlan);
router.get('/:unitId/:classId/unit-plan', Plan.getUnitPlan);
router.get('/:unitId/:classId/topic-details', Plan.getTopicDetails);
router.get('/:planId', Plan.getOnePlan);
router.delete('/:planId', Plan.delete);

module.exports = router;