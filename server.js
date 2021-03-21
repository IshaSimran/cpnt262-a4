//  Load builtin modules
const path = require('path')

//  Load npm modules
const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')

//  Load custom modules
const route_one = require('./routes/api/v0.js')
const route_two = require('./routes/index.js')

//  Assign the express() function
const app = express()

//  Set the view engine to 'ejs"
app.set('view engine', 'ejs');

//  must be invoked in order to pull data from Heroku 
app.use(cors())

//  Sets the global template variables
app.use(function (req, res, next) {
  res.locals = {
    siteHeading: "Different Types of Flowers",
    subHeading: "CPNT262 - A4 - JSON Image Gallery",
    copyright: "Isha Simran"
  }
  next()
})

//  Static page handler
app.use(express.static(path.join(__dirname, 'public')))

//  Route handlers
app.use('/', route_one)
app.use('/', route_two)

//  Error handler
app.use(function (req, res) {
  res.status(404)
  res.sendFile(__dirname + '/public/404.html')
})

const port = process.env.PORT || 3000

//  Listening block
app.listen(port, function () {
  console.log(`Listening on port: ${port}`)
})