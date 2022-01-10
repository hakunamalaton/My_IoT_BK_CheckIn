const express = require('express');
const router = express.Router();

const checkinInfo = require('../app/controllers/CheckinInfoController');

router.use('/v2/:time', checkinInfo.exportStatis);

router.use('/v1', checkinInfo.postCheckInInfo);

module.exports = router;
