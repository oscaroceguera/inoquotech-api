const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

let Solicitud = new Schema({
  nombre: String,
  sectionTypes: {
    type:  Schema.Types.String,
    require: true,
    ref: 'Section'
  },
  serviceTypes: [{
    type:  Schema.Types.String,
    require: true,
    ref: 'Service'
  }],
  country: {
    type:  Schema.Types.String,
    require: true,
    ref: 'Country'
  },
  state: {
    type:  Schema.Types.String,
    require: true,
    ref: 'State'
  },
  town: {
    type:  Schema.Types.String,
    require: true,
    ref: 'Town'
  }
})

const solicitud = mongoose.model('solicitud', Solicitud)

module.exports = {Solicitud: solicitud}
