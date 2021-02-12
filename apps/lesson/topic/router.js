import Topic from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Topic.create);
router.put('/:topicId', Topic.update);
router.get('/:courseId/course-topics', Topic.getAllCourseTopics);
router.get('/:topicId', Topic.getOneTopic);
router.delete('/:topicId', Topic.delete);

module.exports = router;