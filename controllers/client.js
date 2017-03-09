const Boom = require('boom')
const uuid = require('uuid')
const ClientCompany = require('../models/client/company')
const {findOneByQuery, saved} = require('../helpers/queries')

exports.addClient = (req, res) =>
  saved(ClientCompany, req.body)
    .then(data => res.json(data))
    .catch(err => Boom.badImplementation(err))

exports.getClientByRfc = (req, res) =>
  findOneByQuery(ClientCompany, { rfc: req.params.rfc.toUpperCase() })
    .then(data => res.json(data))
    .catch(err => Boom.badImplementation(err))
