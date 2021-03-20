const express = require('express')

const router = express.Router()

router.get('/', function (req, res) {
  res.render('pages/index.ejs', { pageTitle: "CPNT262-A4 Home" })
})

router.get('/login', function (req, res) {
  res.render('pages/login.ejs', { pageTitle: "CPNT262-A4 Login" })
})

router.get('/register', function (req, res) {
  res.render('pages/register.ejs', { pageTitle: "CPNT262-A4 Registration" })
})

module.exports = router
