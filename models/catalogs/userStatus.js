const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

module.exports = mongoose.model('UserStatus', new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    ref: 'UserStatus',
    unique: true
  },
  value: String
}))
