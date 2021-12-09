const mySql = require('../config/db/index');

const Truongdh = function (truongdh) {
    this.id = truongdh.id;
    this.ma = truongdh.ma;
    this.ten = truongdh.ten;
};

module.exports = Truongdh;