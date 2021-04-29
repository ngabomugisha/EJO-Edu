import Student from './controller';
import express from 'express';
import uploader from '../../utils/uploader'
const router = express.Router();

router.post('/', Student.create);
router.post('/create-from-csv', uploader.fields([{name: 'students'}]), Student.createFromCSV);
router.put('/:studentId', Student.update);
router.get('/:classId/class-students', Student.getAllClassStudents);
router.get('/:schoolId/school-students', Student.getAllSchoolStudents);
router.get('/:schoolId/search-students/:searchKey', Student.searchSchoolStudents);
router.get('/:studentId', Student.getOneStudent);
router.delete('/:studentId', Student.delete);
router.put('/:studentId/expel', Student.expel);

module.exports = router;