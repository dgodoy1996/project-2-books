const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');

/* GET users listing. */
router.get('/', booksCtrl.index)
router.get('/new', booksCtrl.new)
router.get('/:id', booksCtrl.show)
router.post('/', booksCtrl.create)

module.exports = router;