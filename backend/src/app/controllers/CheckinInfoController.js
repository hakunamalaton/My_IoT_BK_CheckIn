const UserInfo = require('../../Models/user_info');
const CheckInf = require('../../Models/checkinInfo');

exports.postCheckInInfo = (req, res) => {
    const result = (data) => res.send(data);

    CheckInf.postCheckInInfo(result, req.body);
};
