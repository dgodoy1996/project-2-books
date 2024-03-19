const Book = require('../models/book')

module.exports = {
    create
}

async function create(req, res) {
    const book = await Book.findById(req.params.id)
    book.synopsis.push(req.body)
    try {
        await book.save()
    } catch(err) {
        console.log(err)
    }
    res.redirect(`/books/${book.id}`)
}