const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

module.exports = mongoose.model('RequestProcesadora', new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    ref: 'RequestProcesadora'
  },
  productos: String,
  turnos: String,
  plantas: String,
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: Date
}))
