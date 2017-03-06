const mongoose = require('mongoose')
// const sectionTypes = require('../data/sectionTypes.json')
// const Section = require('../models/section')

mongoose.connect(global.config.database)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', () => {
  console.log('Connection with database success')
})

exports.db = db
