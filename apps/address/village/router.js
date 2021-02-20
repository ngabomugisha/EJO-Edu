import Village from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Village.create);
router.put('/:villageId', Village.update);
router.get('/:cellId/cell-villages', Village.getAllCellVillages);
router.get('/', Village.getAll);
router.get('/:villageId', Village.getOneVillage);
router.delete('/:villageId', Village.delete);

module.exports = router;