const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')
const sectionTypes = require('../data/sectionTypes.json')

// module.exports = mongoose.model('Section', new Schema({
//   _id: {
//     type: String,
//     default: uuid.v4
//   },
//   value: String
// }))

let Section = new Schema({
  _id: {
    type: String,
    default: uuid.v4
  },
  value: String
})

const section = mongoose.model('section', Section)

// Cargar cuando se crea el model si se actualiza un valor
// se tienen que remover y acargar
section.create(sectionTypes)

module.exports = {Section: section}
