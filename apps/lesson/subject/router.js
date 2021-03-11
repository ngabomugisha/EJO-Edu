import Subject from './controller';
import express from 'express';
import uploader from '../../../utils/uploader'
const router = express.Router();

router.post('/', Subject.create);
router.post('/create-from-csv', uploader.fields([{name: 'subject'}]), Subject.createFromCSV);
router.put('/:subjectId', Subject.update);
router.get('/', Subject.getAllSubjects);
router.get('/:subjectId', Subject.getOneSubject);
router.delete('/:subjectId', Subject.delete);



module.exports = router;