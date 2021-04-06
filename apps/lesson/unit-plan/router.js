import UnitPlan from './controller';
import express from 'express';
const router = express.Router();

router.post('/', UnitPlan.create);
router.put('/:unitPlanId', UnitPlan.update);
router.get('/:subjectId/subject-unit-plans', UnitPlan.getSubjectUnitPlans);
router.get('/:subTopicId/subtopic-unit-plans', UnitPlan.getSubTopicUnitPlans);
router.get('/:topicId/topic-unit-plans', UnitPlan.getTopicUnitPlans);
router.get('/topics-list-unit-plans', UnitPlan.getTopicListUnitPlans);
router.get('/:unitId', UnitPlan.getOneUnitPlan);
router.delete('/:unitPlanId', UnitPlan.delete);

module.exports = router;