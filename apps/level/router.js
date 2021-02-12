import Level from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Level.create);
router.put('/:levelId', Level.update);
router.get('/', Level.getAllLevels);
router.get('/:levelId', Level.getOneLevel);
router.delete('/:levelId', Level.delete);

module.exports = router;