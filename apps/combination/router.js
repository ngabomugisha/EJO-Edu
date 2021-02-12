import Combination from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Combination.create);
router.put('/:combinationId', Combination.update);
router.get('/', Combination.getAllCombinations);
router.get('/:combinationId', Combination.getOneCombination);
router.delete('/:combinationId', Combination.delete);

module.exports = router;