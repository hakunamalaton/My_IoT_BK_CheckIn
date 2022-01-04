const express = require('express');
const router = express.Router();

const login = require('../app/controllers/LoginController');

router.use('/v1', login.loginToken);

module.exports = router;
