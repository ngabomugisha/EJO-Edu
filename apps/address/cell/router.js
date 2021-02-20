import Cell from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Cell.create);
router.put('/:cellId', Cell.update);
router.get('/:sectorId/sector-cells', Cell.getAllSectorCells);
router.get('/', Cell.getAll);
router.get('/:cellId', Cell.getOneCell);
router.delete('/:cellId', Cell.delete);

module.exports = router;