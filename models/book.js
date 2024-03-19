const mongoose = require('mongoose')

const Schema = mongoose.Schema

const synopsisSchema = new Schema ({
    content: String,
    rating: Number
}, {
    timestamps: true
})

const bookSchema = new Schema ({
    name: String,
    author: String,
    startDate: Date,
    endDate: Date,
    synopsis: [synopsisSchema]
})

module.exports = mongoose.model('Book', bookSchema)