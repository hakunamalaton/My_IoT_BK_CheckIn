const index = require('./news');
const site = require('./site');
const userinf = require('./userinfo');
const checkin = require('./checkininfo');
const login = require('./login');

function route(app) {
    app.use('/news', index);
    app.use('/get_user_info', userinf);
    app.use('/post_user_info', userinf);
    app.use('/post_checkin_info', checkin);
    app.use('/export_statis_checkin_info', checkin);
    app.use('/login', login);
    app.use('/', site);
}

module.exports = route;
