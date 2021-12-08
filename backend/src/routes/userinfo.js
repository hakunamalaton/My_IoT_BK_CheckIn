const express = require('express');
const router = express.Router();

const userInfo = require('../app/controllers/UserInfoController');

router.use('/v1/:time', userInfo.getUserInfo);
//router.use('/',userInfo.index
module.exports = router;
