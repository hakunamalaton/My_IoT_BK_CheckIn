const mySql = require('../config/db/index');
const userInf = require('./user_info.js');

const CheckinInfo = function (checkInf) {
    this.id = checkInf.id;
    this.user_info_id = checkInf.id;
    this.vacxin_sl_mui = checkInf.vacxin_sl_mui;
    this.checkin_time = checkInf.checkin_time;
    this.nhiet_do = checkInf.nhiet_do;
    this.khau_trang = checkInf.khau_trang;
    this.iot_bot_id = checkInf.iot_bot_id;
};

CheckinInfo.postCheckInInfo = (send, req) => {
    let checkQuery = 'SELECT id FROM user_info WHERE cmnd_so = ?';

    if (req.length == undefined) {
        req = [req];
    }
    for (let i = 0; i < req.length; i++) {
        mySql.query(checkQuery, req[i].cmnd_so, (err, res) => {
            if (res.length == 0) {
                // not yet, don't have code to display

                let insertGuestQuery =
                    'INSERT into user_info(cmnd_so) value (?)';
                mySql.query(insertGuestQuery, req[i].cmnd_so, (err, res) => {
                    if (err) {
                        send({ code: '30' });
                        return;
                    }
                    let getId = 'SELECT id FROM user_info WHERE cmnd_so = ?';
                    mySql.query(getId, req[i].cmnd_so, (err, res) => {
                        let checkinObj = {
                            user_info_id: res[0].id,
                            vacxin_sl_mui: req[i].vacxin_sl_mui,
                            checkin_time: req[i].thoi_gian_check_in,
                            nhiet_do: req[i].nhietdo,
                            khau_trang: req[i].khautrang,
                            iot_bot_id: req[i].iot_bot_id,
                        };
                        let insertCheckinQuery =
                            'INSERT into checkin_info SET ?';
                        mySql.query(
                            insertCheckinQuery,
                            checkinObj,
                            (err, res) => {
                                if (err) {
                                    send({ code: '30' });
                                    return;
                                }
                            },
                        );
                    });
                });
            } else {
                let checkinObj = {
                    user_info_id: res[0].id,
                    vacxin_sl_mui: req[i].vacxin_sl_mui,
                    checkin_time: req[i].thoi_gian_check_in,
                    nhiet_do: req[i].nhietdo,
                    khau_trang: req[i].khautrang,
                    iot_bot_id: req[i].iot_bot_id,
                };
                let insertCheckinQuery = 'INSERT into checkin_info SET ?';
                mySql.query(insertCheckinQuery, checkinObj, (err, res) => {
                    if (err) {
                        send({ code: '30' });
                        return;
                    }
                });
            }
        });
    }
    send({
        code: '0',
        msg: 'Done',
        data: req,
    });
};

module.exports = CheckinInfo;
