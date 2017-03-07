const mongoose = require('mongoose')

// Models
const Section = require('../models/section')
const Service = require('../models/service')
const {Solicitud} = require('../models/solicitud')

// Static data
const sectionTypes = require('../data/sectionTypes.json')
const serviceTypes = require('../data/serviceTypes.json')
const solicitudTypes = require('../data/solicitudTypes.json')

mongoose.connect(global.config.database)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', () => {

  // Drop datata base
  mongoose.connection.db.dropDatabase();

  // Load static data
  Service.create(serviceTypes)
  Section.create(sectionTypes)
  Solicitud.create(solicitudTypes)

  console.log('Connection with database success')
})

exports.db = db
