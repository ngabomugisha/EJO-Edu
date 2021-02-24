import Class from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Class.create);
router.put('/:classId', Class.update);
router.get('/:schoolId/school-classes', Class.getAllSchoolclasses);
router.get('/:classId', Class.getOneClass);
router.delete('/:classId', Class.delete);

module.exports = router;