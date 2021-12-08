const mySql = require('../config/db/index');

const UserInfo = function (userinf) {
    this.id = userinf.id;
    this.truong_dh_id = userinf.truong_dh_id;
    this.cb_sv_ma = userinf.cb_sv_ma;
    this.ho_lot = userinf.ho_lot;
    this.ten = userinf.ten;
    this.cb_sv_flag = userinf.cb_sv_flag;
    this.vacxin_sl_mui = userinf.vacxin_sl_mui;
    this.vacxin_info = userinf.vacxin_info;
    this.cmnd_so = userinf.cmnd_so;
    this.sdt = userinf.sdt;
    this.diachi_lienlac = userinf.diachi_lienlac;
    this.last_updated_time = userinf.last_updated_time;
};

UserInfo.getUserInfo = (send, req) => {
    let query = 'SELECT * FROM user_info WHERE last_updated_time >= ?';

    mySql.query(query, req, (err, res) => {
        if (err) {
            console.log('error: ', err);
            send(err);
            return;
        }

        console.log('getAllProduct: ', res);
        send(res);
    });
};

module.exports = UserInfo;
