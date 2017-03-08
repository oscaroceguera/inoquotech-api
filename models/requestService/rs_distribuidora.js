const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

module.exports = mongoose.model('RequestDistribuidora', new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    ref: 'RequestDistribuidora'
  },
  almacenes: String,
  productos: String,
  mercado: String,
  importa: String,
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: Date
}))
