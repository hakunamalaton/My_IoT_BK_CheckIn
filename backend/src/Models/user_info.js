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
    let lastUpdated = req.split('&');
    let date = lastUpdated[0].split('=')[1];
    let time = lastUpdated[1].split('=')[1];

    let isValid = date.split('-');
    let code = '0';
    if (isValid[0].length != 4 && parseInt(isValid[0]) < 2021) {
        code = '30';
    } else {
        switch (parseInt(isValid[1])) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if (parseInt(isValid[2]) > 31 || parseInt(isValid[2]) < 1)
                    code = '30';
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if (parseInt(isValid[2]) > 30 || parseInt(isValid[2]) < 1)
                    code = '30';
                break;
            case 2:
                if (
                    parseInt(isValid[0]) % 400 == 0 ||
                    (parseInt(isValid[0]) % 4 == 0 &&
                        parseInt(isValid[0]) % 100 != 0)
                )
                    if (parseInt(isValid[2]) > 29 || parseInt(isValid[2]) < 1)
                        code = '30';
                    else if (
                        parseInt(isValid[2]) > 28 ||
                        parseInt(isValid[2]) < 1
                    )
                        code = '30';
                break;
            default:
                code = '30';
                break;
        }
    }
    if (code == '30') {
        send({ code: code });
        return;
    }
    let query = 'SELECT * FROM user_info WHERE last_updated_time >= ?';

    mySql.query(query, date + ' ' + time, (err, res) => {
        if (err) {
            console.log('error: ', err);
            send(err);
            return;
        }
        for (var i = 0; i < res.length; i++) {
            let lastUpdated = res[i]['last_updated_time'].split(' ');
            let date = lastUpdated[0];
            let time = lastUpdated[1];
            delete res[i]['last_updated_time'];
            res[i]['date'] = date;
            res[i]['time'] = time;
        }
        let retObj = {
            code: 0,
            msg: 'Done',
            data: res,
        };
        send(retObj);
    });
};

module.exports = UserInfo;
