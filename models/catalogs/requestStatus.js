const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

module.exports = mongoose.model('ReqStatus', new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    ref: 'ReqStatus',
    unique: true
  },
  value: String
}))
