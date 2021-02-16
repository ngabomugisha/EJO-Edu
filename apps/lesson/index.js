import express from 'express';
const router = express.Router();

router.use('/subjects', require('./subject/router'));
router.use('/topics', require('./topic/router'));
router.use('/subtopics', require('./subtopic/router'));
router.use('/units', require('./unit/router'));
router.use('/plans', require('./plan/router'));

module.exports = router;