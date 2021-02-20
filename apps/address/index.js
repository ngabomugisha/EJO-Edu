import express from 'express';
const router = express.Router();

router.use('/provinces', require('./province/router'));
router.use('/districts', require('./district/router'));
router.use('/sectors', require('./sector/router'));
router.use('/cells', require('./cell/router'));
router.use('/villages', require('./village/router'));

module.exports = router;