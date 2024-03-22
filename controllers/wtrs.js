const Wtr = require('../models/wtr');

module.exports = {
    new: newWtr,
    create,
    index,
    delete: deleteWtr
}

function newWtr(req, res) {
    res.render('wtrs/new', { 
        title: 'WTR Books',
        errorMsg: '' });
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
      await Wtr.create(req.body);
      res.redirect('/wtrs');
    } catch (err) {
      console.log(err);
      res.render('wtrs/new', { errorMsg: err.message });
    }
}

async function index(req, res) {
const wtrs = await Wtr.find({})
res.render('wtrs/index', { 
        title: 'All WTR Books', 
        wtrs
    })
}

async function deleteWtr(req, res) {
    await Wtr.findByIdAndDelete(req.params.id)
    res.redirect('/wtrs')
}