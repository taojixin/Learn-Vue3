const express = require('express');
const compression = require('compression')
const cookieParser = require('cookie-parser')
const csrf = require('csurf')

const registerRouter = require('./app/router')

const app = new express();

const csrfProtection = csrf({
  cookie: true,
})
app.use(cookieParser())
app.use(csrfProtection)

app.get('/', function (req, res, next) {
  res.cookie('XSRF-TOKEN', req.csrfToken())
  return next()
})

registerRouter(app)

app.use(compression())

app.use(express.static('./dist'))



app.listen(9002, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("启动成功");
})