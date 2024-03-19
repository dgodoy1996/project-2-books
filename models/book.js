const mongoose = require('mongoose')

const Schema = mongoose.Schema

const synopsisSchema = new Schema ({
    ratings: Number,
    synopsis: String,
}, {
    timestamps: true
})

const bookSchema = new Schema ({
    name: {
        type: String,
        required: true,
        default: 'No Book Name'
    },
    author: {
        type: String,
        required: true,
        default: 'No Author'
    },
    startDate: Date,
    endDate: Date,
    synopsis: [synopsisSchema],
})

module.exports = mongoose.model('Book', bookSchema)