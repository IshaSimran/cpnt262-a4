const express = require('express')

const gallery = require('../../data/gallery.js')

const router = express.Router()

router.get('/api/v0/gallery', function (req, res) {

  res.json(gallery)

})

module.exports = router