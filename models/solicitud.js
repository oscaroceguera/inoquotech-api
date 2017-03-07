const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

let Solicitud = new Schema({
  nombre: String,
  sectionTypes: [
    {type:  Schema.Types.String, require: true, ref: 'Section'}
  ],
  serviceTypes: [
    {type:  Schema.Types.String, require: true, ref: 'Service'}
  ]
})

const solicitud = mongoose.model('solicitud', Solicitud)

module.exports = {Solicitud: solicitud}
