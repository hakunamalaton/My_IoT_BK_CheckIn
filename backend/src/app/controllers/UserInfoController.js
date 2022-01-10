const UserInfo = require('../../Models/user_info');

exports.getUserInfo = (req, res) => {
    const result = (data) => res.send(data);

    UserInfo.getUserInfo(result, req.params.time);
};

exports.postUserInfo = (req, res) => {
    const result = (data) => res.send(data);

    UserInfo.postUserInfo(result, req.body);
};
