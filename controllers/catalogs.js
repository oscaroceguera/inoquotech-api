const Boom = require('boom')
const Section = require('../models/section').Section
const _ = require('lodash')

exports.sections = (req, res) => {
  Section.find({}, (err, sections) => {
    if (!err) {
      if (sections.length === 0) {
        return res.send(Boom.notFound('No se encontraron tipos de secciones registradas.'))
      }
      return res.send(sections)
    } else {
      return res.send(Boom.badImplementation(err))
    }
  })
}
