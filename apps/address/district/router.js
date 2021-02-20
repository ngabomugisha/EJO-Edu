import District from './controller';
import express from 'express';
const router = express.Router();

router.post('/', District.create);
router.put('/:districtId', District.update);
router.get('/:provinceId/province-districts', District.getAllProvinceDistricts);
router.get('/', District.getAll);
router.get('/:districtId', District.getOneDistrict);
router.delete('/:districtId', District.delete);

module.exports = router;