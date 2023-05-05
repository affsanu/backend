const express = require('express');
const { UserReg } = require('../controllers/UserController');

const router = express.Router();

router.post('/join', UserReg);

module.exports = router;