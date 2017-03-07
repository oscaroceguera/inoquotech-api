const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

module.exports = mongoose.model('Country', new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    ref: 'Country',
    unique: true
  },
  value: String
}))
