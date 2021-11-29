const index = require('./news')
const site = require('./site')


function route(app) {
    
    app.use('/news', index)

    app.use('/', site)
      
}

module.exports = route