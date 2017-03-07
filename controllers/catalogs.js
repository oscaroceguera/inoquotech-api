const Boom = require('boom')
const Section = require('../models/section')
const Service = require('../models/service')
const Solicitud = require('../models/solicitud').Solicitud
const _ = require('lodash')

exports.sections = (req, res) => {
  Section.find({}, (err, sections) => {
    if (!err) {
      if (sections.length === 0) {
        return res.send(Boom.notFound('No se encontraron tipos de secciones registradas!'))
      }
      return res.send(sections)
    } else {
      return res.send(Boom.badImplementation(err))
    }
  })
}

exports.services = (req, res) => {
  Service.find({}, (err, services) => {
    if (!err) {
      if (services.length === 0) {
        return res.send(Boom.notFound('No se encontraron tipos de servicios registrados!'))
      }
      return res.send(services)
    } else {
      return res.send(Boom.badImplementation(err))
    }
  })
}

exports.solicitud = (req, res) => {
  Solicitud
    .find()
    .populate('sectionTypes')
    .populate('serviceTypes')
    .exec((err, data) => {
      if (!err) {
        res.send(data)
      } else {
        return res.send(Boom.badImplementation(err))
      }
  })
}
