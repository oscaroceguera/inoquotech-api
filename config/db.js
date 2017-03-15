const mongoose = require('mongoose')
// mongoose.Promise = global.Promise

// Models
const Section = require('../models/catalogs/section')
const Service = require('../models/catalogs/service')
const Country = require('../models/catalogs/country')
const State = require('../models/catalogs/state')
const Town = require('../models/catalogs/town')
const ReqStatus = require('../models/catalogs/requestStatus')
const Module = require('../models/catalogs/Module')
const UserStatus = require('../models/catalogs/UserStatus')

// Static data
const sectionTypes = require('../data/sectionTypes.json')
const serviceTypes = require('../data/serviceTypes.json')
const countries = require('../data/countries.json')
const states = require('../data/states.json')
const towns = require('../data/towns.json')
const reqStatusTypes = require('../data/reqStatusTypes.json')
const modules = require('../data/modules.json')
const statusUsers = require('../data/statusUsers.json')

mongoose.connect(global.config.database)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', () => {

  // Drop datata base & load static data
  // mongoose.connection.db.dropDatabase();
  //
  // Service.create(serviceTypes)
  // Section.create(sectionTypes)
  // Country.create(countries)
  // State.create(states)
  // Town.create(towns)
  // ReqStatus.create(reqStatusTypes)
  // Module.create(modules)
  // UserStatus.create(statusUsers)

  console.log('Connection with database success')
})

exports.db = db
