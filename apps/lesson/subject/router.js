import Subject from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Subject.create);
router.put('/:subjectId', Subject.update);
router.get('/', Subject.getAllSubjects);
router.get('/:subjectId', Subject.getOneSubject);
router.delete('/:subjectId', Subject.delete);

module.exports = router;