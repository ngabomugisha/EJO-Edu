import School from './controller';
import express from 'express';
const router = express.Router();

router.post('/', School.create);
router.put('/:schoolId', School.update);
router.get('/', School.getAllSchools);
router.get('/:schoolId', School.getOneSchool);
router.delete('/:schoolId', School.delete);

module.exports = router;