import Province from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Province.create);
router.put('/:provinceId', Province.update);
router.get('/', Province.getAllProvinces);
router.get('/:provinceId', Province.getOneProvince);
router.delete('/:provinceId', Province.delete);

module.exports = router;