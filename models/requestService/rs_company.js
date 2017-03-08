const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

module.exports = mongoose.model('RequestCompany', new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    ref: 'RequestCompany'
  },
  companyGiro: {type: Schema.Types.String, ref: 'Section'},
  companyName: String,
  rfc: String,
  country: {type: Schema.Types.String, ref: 'Country'},
  state: {type: Schema.Types.String, ref: 'State'},
  town: {type: Schema.Types.String, ref: 'Town'},
  locality: String,
  address: String,
  neighborhood: String,
  zipCode: String,
  companyPhone: String,
  companyEmail: String,
  legalName: String,
  legalPhone: String,
  legalEmail: String,
  contactName: String,
  contactPhone: String,
  contactEmail: String,
  contactPosition: String
}))
