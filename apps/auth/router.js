import User from './controller';
import express from 'express';
import passport from 'passport';
import '../../middleware/auth';
const router = express.Router(); 

router.post('/signup', User.signup);
router.post('/signin', User.signin);
router.post('/verify-token', passport.authenticate("jwt", { session : false }), User.verifyToken);
router.post('/regenerate-verification-digits', passport.authenticate("jwt", { session : false }), User.regenerateVerificationDigits);
router.post('/verify-email', passport.authenticate("jwt", { session : false }), User.verifyEmail);
router.post('/update-names', passport.authenticate("jwt", { session : false }), User.updateName);
router.post('/update-password', passport.authenticate("jwt", { session : false }), User.updatePassword);
router.post('/email-taken',  User.emailTaken);

module.exports = router;