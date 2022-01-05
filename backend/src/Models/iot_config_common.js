const mySql = require('../config/db/index');

const IotConfigCommon = function (iotconfigcommon) {
    this.id = iotconfigcommon.id;
    this.config_group = iotconfigcommon.config_group;
    this.config_code = iotconfigcommon.config_code;
    this.config_value = iotconfigcommon.config_value;
    this.ghi_chu = iotconfigcommon.ghi_chu;
    this.last_updated_time = iotconfigcommon.last_updated_time;
};

module.exports = IotConfigCommon;