const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wtrSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'No Book Name'
    },
    author: {
        type: String,
        required: true,
        default: 'No Author'
    }
  })

module.exports = mongoose.model('Wtr', wtrSchema)