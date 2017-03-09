const Boom = require('boom')
const _ = require('lodash')

const Section = require('../models/catalogs/section')
const Service = require('../models/catalogs/service')
const Country = require('../models/catalogs/country')
const State = require('../models/catalogs/state')
const Town = require('../models/catalogs/town')
const RequestStatus = require('../models/catalogs/requestStatus')
const Module = require('../models/catalogs/Module')
const UserStatus = require('../models/catalogs/UserStatus')

const {findAll, findOneByQuery} = require('../helpers/queries')

exports.sections = (req, res) =>
  findAll(Section)
    .then(data => res.json(data))
    .catch(err => Boom.badImplementation(err))

exports.services = (req, res) =>
  findAll(Service)
    .then(data => res.json(data))
    .catch(err => Boom.badImplementation(err))

exports.countries = (req, res) =>
  findAll(Country)
    .then(data => res.json(data))
    .catch(err => Boom.badImplementation(err))

exports.states = (req, res) =>
  findOneByQuery(State, { parentId: req.params.id })
    .then(data => res.json(data))
    .catch(err => Boom.badImplementation(err))

exports.towns = (req, res) =>
  findOneByQuery(Town, { parentId: req.params.id })
    .then(data => res.json(data))
    .catch(err => Boom.badImplementation(err))

exports.requestStatus = (req, res) =>
  findAll(RequestStatus)
    .then(data => res.json(data))
    .catch(err => Boom.badImplementation(err))

exports.modules = (req, res) =>
  findAll(Module)
    .then(data => res.json(data))
    .catch(err => Boom.badImplementation(err))

exports.userStatuses = (req, res) =>
  findAll(UserStatus)
    .then(data => res.json(data))
    .catch(err => Boom.badImplementation(err))
