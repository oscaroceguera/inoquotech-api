const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

module.exports = mongoose.model('RequestTransporte', new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    ref: 'RequestTransporte'
  },
  productos: String,
  cetificado: String,
  saludHigiene: String,
  permisos: String,
  noVehiculos: String,
  talleres: String,
  registros: String,
  toxicologicos: String
}))
