const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema({
    name: String,
    author: {
        type: String,
    },
    startDate: {
        type: Date,
        default: function() {
            return new Date()
        }
    },
    endDate: Date
})

module.exports = mongoose.model('Book', bookSchema)