const index = require('./news');
const site = require('./site');
const userinf = require('./userinfo');

function route(app) {
    app.use('/news', index);
    app.use('/get_user_info', userinf);
    app.use('/', site);
}

module.exports = route;
