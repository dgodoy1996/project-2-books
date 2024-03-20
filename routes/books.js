const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');
const ensureLoggedIn = require('../config/ensureLoggedIn')

/* GET users listing. */
router.get('/', booksCtrl.index)
router.get('/new', ensureLoggedIn, booksCtrl.new)
router.get('/:id', booksCtrl.show)
router.post('/', ensureLoggedIn, booksCtrl.create)

module.exports = router;