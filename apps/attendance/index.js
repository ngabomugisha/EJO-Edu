import express from 'express';
const router = express.Router();

router.use('/class-attendances', require('./class-attendance/router'));

module.exports = router;