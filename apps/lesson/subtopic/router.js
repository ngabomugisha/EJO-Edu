import SubTopic from './controller';
import express from 'express';
const router = express.Router();

router.post('/', SubTopic.create);
router.put('/:subTopicId', SubTopic.update);
router.get('/:topicId/topic-subTopics', SubTopic.getAllTopicSubTopics);
router.get('/:subTopicId', SubTopic.getOneSubTopic);
router.delete('/:subTopicId', SubTopic.delete);

module.exports = router;