const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// Models
const Section = require('../models/section')
const Service = require('../models/service')
const Country = require('../models/country')
const State = require('../models/state')
const Town = require('../models/town')
const {Solicitud} = require('../models/solicitud')

// Static data
const sectionTypes = require('../data/sectionTypes.json')
const serviceTypes = require('../data/serviceTypes.json')
const solicitudTypes = require('../data/solicitudTypes.json')
const countries = require('../data/countries.json')
const states = require('../data/states.json')
const towns = require('../data/towns.json')

mongoose.connect(global.config.database)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', () => {

  // Drop datata base
  // mongoose.connection.db.dropDatabase();

  // Load static data
  // Service.create(serviceTypes)
  // Section.create(sectionTypes)
  // Country.create(countries)
  // State.create(states)
  // Town.create(towns)
  // Solicitud.create(solicitudTypes)

  console.log('Connection with database success')
})

exports.db = db
