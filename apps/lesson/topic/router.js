import Topic from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Topic.create);
router.put('/:topicId', Topic.update);
router.get('/:subjectId/subject-topics', Topic.getAllSubjectTopics);
router.get('/:topicId', Topic.getOneTopic);
router.delete('/:topicId', Topic.delete);

module.exports = router;