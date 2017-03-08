const Boom = require('boom')
const Section = require('../models/catalogs/section')
const Service = require('../models/catalogs/service')
const Country = require('../models/catalogs/country')
const State = require('../models/catalogs/state')
const Town = require('../models/catalogs/town')
const RequestStatus = require('../models/catalogs/requestStatus')
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

exports.countries = (req, res) => {
  Country.find({}, (err, countries) => {
    if (!err) {
      if (countries.length === 0) {
        return res.send(Boom.notFound('No se encontraron paises!'))
      }
      return res.send(countries)
    } else {
      return res.send(Boom.badImplementation(err))
    }
  })
}

exports.states = (req, res) => {
  State.find({parentId: req.params.id}, (err, states) => {
    if (!err) {
      if (states.length === 0) {
        return res.send(Boom.notFound('No se encontraron estados!'))
      }
      return res.send(states)
    } else {
      return res.send(Boom.badImplementation(err))
    }
  })
}

exports.towns = (req, res) => {
  Town.find({parentId: req.params.id}, (err, towns) => {
    if (!err) {
      if (towns.length === 0) {
        return res.send(Boom.notFound('No se encontraron ciudades!'))
      }
      return res.send(towns)
    } else {
      return res.send(Boom.badImplementation(err))
    }
  })
}

exports.requestStatus = (req, res) => {
  RequestStatus.find({}, (err, status) => {
    if (!err) {
      if (status.length === 0) {
        return res.send(Boom.notFound('No se encontraron status registrados!'))
      }
      return res.send(status)
    } else {
      return res.send(Boom.badImplementation(err))
    }
  })
}
