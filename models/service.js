const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

module.exports = mongoose.model('Service', new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    ref: 'Service',
    unique: true
  },
  value: String
}))
