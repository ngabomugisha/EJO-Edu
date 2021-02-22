import QuestionBank from './controller';
import express from 'express';
const router = express.Router();

router.post('/', QuestionBank.create);
router.put('/:questionBankId', QuestionBank.update);
router.get('/:unitId/unit-question-bank', QuestionBank.getUnitQuestionBank);
router.get('/:subjectId/subject-question-bank', QuestionBank.getSubjectQuestionBank);
router.get('/:questionBankId', QuestionBank.getOneQuestionBank);
router.delete('/:questionBankId', QuestionBank.delete);

module.exports = router;