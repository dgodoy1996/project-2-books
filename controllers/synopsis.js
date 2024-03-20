const Book = require('../models/book')

module.exports = {
    create,
    delete: deleteReview
}

async function create(req, res) {
    const book = await Book.findById(req.params.id)
    
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    console.log(req.body)
    book.synopsis.push(req.body)
    console.log(book.synopsis)
    try {
        await book.save()
    } catch(err) {
        console.log(err)
    }
    res.redirect(`/books/${book.id}`)
}

async function deleteReview(req, res) {
    const book = await Book.findOne({ 'synopsis._id': req.params.id, 'synopsis.user': req.user._id })
    if(!book) return res.redirect('/books')
    book.synopsis.remove(req.params.id)
    await book.save()
    res.redirect(`/books/${book._id}`)
}