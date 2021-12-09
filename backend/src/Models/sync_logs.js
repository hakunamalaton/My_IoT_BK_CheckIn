const mySql = require('../config/db/index');

const SyncLogs = function (synclogs) {
    this.id = synclogs.id;
    this.log_time = synclogs.log_time;
};

module.exports = SyncLogs;