import QuestionBank from './controller';
import express from 'express';
const router = express.Router();

router.post('/', QuestionBank.create);
router.put('/:questionBankId', QuestionBank.update);
router.get('/:classId/class-questionBanks', QuestionBank.getAllClassQuestionBanks);
router.get('/:schoolId/school-questionBanks', QuestionBank.getAllSchoolQuestionBanks);
router.get('/:questionBankId', QuestionBank.getOneQuestionBank);
router.delete('/:questionBankId', QuestionBank.delete);

module.exports = router;