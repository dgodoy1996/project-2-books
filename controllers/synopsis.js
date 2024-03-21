const Book = require('../models/book')

module.exports = {
    create,
    delete: deleteSynopsis,
    edit,
    update
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

async function deleteSynopsis(req, res) {
    const book = await Book.findOne({ 'synopsis._id': req.params.id, 'synopsis.user': req.user._id })
    if(!book) return res.redirect('/books')
    book.synopsis.remove(req.params.id)
    await book.save()
    res.redirect(`/books/${book._id}`)
}

async function edit(req, res) {
    const book = await Book.findOne({ 'synopsis._id': req.params.id, 'synopsis.user': req.user._id })
    const synopsis = book.synopsis.id(req.params.id)
    console.log(synopsis)
    res.render('synopsis/edit', { synopsis,
        book,
        title: 'Edit' 
    })
}

async function update(req, res) {
    const book = await Book.findOne({ 'synopsis._id': req.params.id, 'synopsis.user': req.user._id })
    const synopsisSubdoc = book.synopsis.id(req.params.id)

    if(!synopsisSubdoc.user.equals(req.user._id)) return res.redirect(`/books/${book._id}`)
    synopsisSubdoc.synopsis = req.body.synopsis

    try {
        await book.save()
    } catch(err) {
        console.log(err)
    }
    res.redirect(`/books/${book._id}`)
}