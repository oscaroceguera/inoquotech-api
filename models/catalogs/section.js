const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

module.exports = mongoose.model('Section', new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    ref: 'Section',
    unique: true
  },
  value: String
}))
