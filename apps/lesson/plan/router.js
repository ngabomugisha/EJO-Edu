import Plan from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Plan.create);
router.put('/:planId', Plan.update);
router.get('/:courseId/course-plan', Plan.getCoursePlan);
router.get('/:planId', Plan.getOnePlan);
router.delete('/:planId', Plan.delete);

module.exports = router;