const mySql = require('../config/db/index');

const FeedbackInfo = function (feedbackinfo) {
    this.id = feedbackinfo.id;
    this.fb_info_json = feedbackinfo.fb_info_json;
    this.created_time = feedbackinfo.created_time;
    this.daduyetflag = feedbackinfo.daduyetflag;
    this.last_updated_time = feedbackinfo.last_updated_time;
    this.cb_duyet_id = feedbackinfo.cb_duyet_id;
};

module.exports = FeedbackInfo;