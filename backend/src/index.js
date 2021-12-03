const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
const path = require('path')
app.use(morgan('combined'))

app.use(express.urlencoded({
  extended:true
}))
app.use(express.json())

const route = require('./routes')

                                                route(app)


app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})