import Sector from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Sector.create);
router.put('/:sectorId', Sector.update);
router.get('/:districtId/district-sectors', Sector.getAllDistrictSectors);
router.get('/', Sector.getAll);
router.get('/:sectorId', Sector.getOneSector);
router.delete('/:sectorId', Sector.delete);

module.exports = router;