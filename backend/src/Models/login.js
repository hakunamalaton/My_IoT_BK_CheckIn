const mySql = require('../config/db/index');
const jwt = require('jsonwebtoken');

const LoginInfo = function (loginInf) {
    this.user = loginInf.user;
    this.pass = loginInf.pass;
};

LoginInfo.loginToken = (send, req) => {
    let loginQuery = 'SELECT * FROM account WHERE user = ? AND pass = ?';

    mySql.query(loginQuery, [req.username, req.password], (err, res) => {
        if (err) {
            send({ code: '31' });
        }
        if (res.length == 0) {
        } else {
            let accessToken = jwt.sign(req, 'ttlam');
            send({ accessToken });
        }
    });
};

module.exports = LoginInfo;
