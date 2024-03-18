const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');
const book = require('../models/book');
const books = require('../controllers/books');

/* GET users listing. */
router.get('/', booksCtrl.index)
router.get('/new', booksCtrl.new)
router.post('/', booksCtrl.create)

module.exports = router;
