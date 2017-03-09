const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

module.exports = mongoose.model('RequestService', new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    ref: 'RequestService',
    unique: true
  },
  serviceTypes: [{
    type:  Schema.Types.String,
    require: true,
    ref: 'Service'
  }],
  esquema: {
    type: String,
    require: true
  },
  hasCertificado: String,
  capacitacionTema: String,
  cantidadPersonas: String,
  nivelJerarquico: String,
  objetivoMuestras: String,
  porqueMuestreo: String,
  tipoMuestreo: String,
  hasPVM: String,
  muestreoFecha: String,
  analisisFecha: String,
  labAcreditado: String,
  isClient: {
    type: Boolean,
    default: false
  },
  isClientRFC: {
    type: String,
    uppercase: true
  },
  status: {
    type: Schema.Types.String,
    require: true,
    ref: 'ReqStatus',
    default: "759b621a-0c7d-4439-a6e4-80069d4b77fd"
  },
  company: {type: Schema.Types.String, ref: 'RequestCompany'},
  agricola: { type: Schema.Types.String, ref: 'RequestAgricola'},
  acuicola: {type: Schema.Types.String, ref: 'RequestAcuicola'},
  procesadora: {type: Schema.Types.String, ref: 'RequestProcesadora'},
  distribuidora: {type: Schema.Types.String, ref: 'RequestDistribuidora'},
  laboratorio: {type: Schema.Types.String, ref: 'RequestLaboratorio'},
  restaurante: {type: Schema.Types.String, ref: 'RequestRestaurante'},
  transporte: {type: Schema.Types.String, ref: 'RequestTransporte'},
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: Date
}))
