import ClassTeacher from './controller';
import express from 'express';
const router = express.Router();

router.post('/', ClassTeacher.create);
router.put('/:classTeacherId', ClassTeacher.update);
router.get('/:classId/class-teachers', ClassTeacher.getOneClassTeachers);
router.get('/:teacherId/teacher-classes', ClassTeacher.getOneTeacherClasses);
router.get('/:classTeacherId', ClassTeacher.getOneClassTeacher);
router.delete('/:classTeacherId', ClassTeacher.delete);

module.exports = router;