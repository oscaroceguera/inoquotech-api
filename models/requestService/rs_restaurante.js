const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

module.exports = mongoose.model('RequestRestaurante', new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    ref: 'RequestRestaurante'
  },
  productos: String,
  horario: String,
  sucursales: String,
  tipoInstalacion: String,
  congelacion: String,
  verificacion: String,
  sanitarios: String,
  capacitacion: String,
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: Date
}))
