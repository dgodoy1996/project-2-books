const Book = require('../models/book')

module.exports = {
    index,
    new: newBook,
    create,
    show
}

async function index(req, res) {
    const books = await Book.find({})
    res.render('books/index', { 
        title: 'All Books', 
        books
    })
}

function newBook(req, res) {
    res.render('books/new', { 
        title: 'All Books',
        errorMsg: ''
    })
}

async function create(req, res) {
    console.log(req.body)
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    req.body.user = req.session.passport.user

    try {
        await Book.create(req.body)
        res.redirect('/books')
    } catch(err) {
        console.log(err)
        res.render('books/new'), { 
            errorMsg: err
        }
    }
}

async function show(req, res) {
    const book = await Book.findById(req.params.id)
    res.render('books/show', {
        title: 'Book Details',
        book,
        user: req.session?.passport?.user
    })
}