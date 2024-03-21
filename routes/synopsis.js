const express = require('express')
const router = express.Router()
const synopsisCtrl = require('../controllers/synopsis')
const { ensureIndexes } = require('../models/book')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.post('/books/:id/synopsis', ensureLoggedIn, synopsisCtrl.create)
router.delete('/synopsis/:id', ensureLoggedIn, synopsisCtrl.delete)
router.put('/synopsis/:id', ensureLoggedIn, synopsisCtrl.update)
router.get('/synopsis/:id/edit', ensureLoggedIn, synopsisCtrl.edit)


module.exports = router