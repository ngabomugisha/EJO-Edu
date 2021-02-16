import Term from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Term.create);
router.put('/:termId', Term.update);
router.get('/', Term.getAllTerms);
router.get('/:termId', Term.getOneTerm);
router.delete('/:termId', Term.delete);

module.exports = router;