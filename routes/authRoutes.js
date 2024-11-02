const express = require('express');
const { signup, forgotPassword, resetPassword } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

module.exports = router;
