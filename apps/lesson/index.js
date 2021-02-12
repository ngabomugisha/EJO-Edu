import express from 'express';
const router = express.Router();

router.use('/courses', require('./course/router'));
router.use('/topics', require('./topic/router'));
router.use('/sub-topics', require('./subtopic/router'));
router.use('/units', require('./unit/router'));
router.use('/plans', require('./plan/router'));

module.exports = router;