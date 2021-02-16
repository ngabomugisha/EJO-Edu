import Guest from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Guest.create);
router.put('/:guestId', Guest.update);
router.get('/:school/school-guests', Guest.getAllSchoolGuests);
router.get('/:guestId', Guest.getOneGuest);
router.delete('/:guestId', Guest.delete);

module.exports = router;