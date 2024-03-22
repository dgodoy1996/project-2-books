const express = require('express');
const router = express.Router();
const wtrsCtrl = require('../controllers/wtrs');
const ensureLoggedIn = require('../config/ensureLoggedIn')
	
router.get('/', wtrsCtrl.index)
router.get('/new', wtrsCtrl.new)
router.post('/', wtrsCtrl.create)
router.delete('/:id', ensureLoggedIn, wtrsCtrl.delete)
	
module.exports = router;