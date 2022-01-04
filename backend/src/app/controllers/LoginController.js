const UserInfo = require('../../Models/user_info');
const CheckInf = require('../../Models/checkinInfo');
const Login = require('../../Models/login');

exports.loginToken = (req, res) => {
    const result = (data) => res.send(data);

    Login.loginToken(result, req.body);
};
