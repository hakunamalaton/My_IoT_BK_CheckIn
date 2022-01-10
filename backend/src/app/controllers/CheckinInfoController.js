const UserInfo = require('../../Models/user_info');
const CheckInf = require('../../Models/checkinInfo');

exports.postCheckInInfo = (req, res) => {
    const result = (data) => res.send(data);

    CheckInf.postCheckInInfo(result, req.body);
};

exports.exportStatis = (req, res) => {
    const result = (data) => res.send(data);

    let lastUpdated = req.params.time.split('&');
    let startDate = lastUpdated[0].split('=')[1];
    let endDate = lastUpdated[1].split('=')[1];

    CheckInf.exportStatis(result, { startDate, endDate });
};
