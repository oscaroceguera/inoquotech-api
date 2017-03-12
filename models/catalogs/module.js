const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

module.exports = mongoose.model('Module', new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    ref: 'Module',
    unique: true
  },
  value: String,
  description: String,
  iconType: String,
  path: String
}))
