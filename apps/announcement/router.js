import Announcement from './controller';
import express from 'express';
const router = express.Router();

router.post('/', Announcement.create);
router.get('/sent', Announcement.getSentAnnouncements);
router.get('/received', Announcement.getReceivedAnnouncements);
router.get('/:announcementId', Announcement.getOneAnnouncement);
router.delete('/:announcementId', Announcement.delete);

module.exports = router;