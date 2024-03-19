const express = require('express')
const router = express.Router()
const synopsisCtrl = require('../controllers/synopsis')

router.post('/books/:id/synopsis', synopsisCtrl.create)

module.exports = router