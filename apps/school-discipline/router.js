import SchoolDiscipline from './controller';
import express from 'express';
const router = express.Router();

router.post('/', SchoolDiscipline.create);
router.put('/:schoolDisciplineId', SchoolDiscipline.update);
router.get('/', SchoolDiscipline.getAllSchoolDisciplines);
router.get('/:schoolDisciplineId', SchoolDiscipline.getOneSchoolDiscipline);
router.delete('/:schoolDisciplineId', SchoolDiscipline.delete);

module.exports = router;