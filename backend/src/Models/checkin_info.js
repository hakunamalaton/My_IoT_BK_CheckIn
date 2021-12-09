const mySql = require('../config/db/index');

const CheckinInfo = function (checkininfo) {
    this.id = checkininfo.id;
    this.user_info_id = checkininfo.user_info_id;
    this.vacxin_sl_mui = checkininfo.vacxin_sl_mui;
    this.checkin_time = checkininfo.checkin_time;
    this.nhiet_do = checkininfo.nhiet_do;
    this.khau_trang = checkininfo.khau_trang;
    this.iot_bot_id = checkininfo.iot_bot_id;
};

module.exports = CheckinInfo;