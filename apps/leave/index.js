import express from 'express';
const router = express.Router();

router.use('/student-leaves', require('./student-leave/router'));
router.use('/teacher-leaves', require('./teacher-leave/router'));

module.exports = router;