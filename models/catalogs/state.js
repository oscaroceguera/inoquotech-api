const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

module.exports = mongoose.model('State', new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    ref: 'State',
    unique: true
  },
  value: String,
  parentId : {
    type: Schema.Types.String,
    require: true,
    ref: 'Country'
  }
}))
