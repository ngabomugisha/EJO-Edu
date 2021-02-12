import Course from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Course.create);
router.put('/:courseId', Course.update);
router.get('/', Course.getAllCourses);
router.get('/:courseId', Course.getOneCourse);
router.delete('/:courseId', Course.delete);

module.exports = router;