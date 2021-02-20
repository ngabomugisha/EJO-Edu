import express from 'express';
import passport from 'passport';
import './middleware/auth';
const router = express.Router();

router.use('/api/auth', require('./apps/auth/router'));
router.use('/api/schools', passport.authenticate("jwt", { session : false }), require('./apps/school/router'));
router.use('/api/levels', passport.authenticate("jwt", { session : false }), require('./apps/level/router'));
router.use('/api/combinations', passport.authenticate("jwt", { session : false }), require('./apps/combination/router'));
router.use('/api/classes', passport.authenticate("jwt", { session : false }), require('./apps/class/router'));
router.use('/api/students', passport.authenticate("jwt", { session : false }), require('./apps/student/router'));
router.use('/api/lessons', passport.authenticate("jwt", { session : false }), require('./apps/lesson'));
router.use('/api/assignments', passport.authenticate("jwt", { session : false }), require('./apps/assignment/router'));
router.use('/api/leaves', passport.authenticate("jwt", { session : false }), require('./apps/leave/'));
router.use('/api/terms', passport.authenticate("jwt", { session : false }), require('./apps/term/router'));
router.use('/api/guests', passport.authenticate("jwt", { session : false }), require('./apps/guest/router'));
router.use('/api/timetables', passport.authenticate("jwt", { session : false }), require('./apps/timetable/router'));
router.use('/api/attendances', passport.authenticate("jwt", { session : false }), require('./apps/attendance'));
router.use('/api/addresses', passport.authenticate("jwt", { session : false }), require('./apps/address'));

module.exports = router;