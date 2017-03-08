const Boom = require('boom')
const uuid = require('uuid')

const ClientCompany = require('../models/client/company')

function add(model, body) {
  return new Promise((resolve, reject) => {
    model.create(body, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

const find = (model, query) => {
  return new Promise((resolve, reject) => {
    model.find(query, (err, data) => {
      if (!err) {
        if (data.length === 0) {
          reject(Boom.notFound('No se encontro como cliente registrado'))
        }
        resolve(data)
      } else {
        reject(Boom.badImplementation(err))
      }
    })
  })
}

exports.addClient = (req, res) => {
  const body = req.body
  add(ClientCompany, body)
    .then(datos => res.json(datos))
    .catch(err => res.send(Boom.badImplementation(err)))
}

exports.getClientByRfc = (req, res) => {
  const rfc = req.params.rfc
  find(ClientCompany, {rfc: rfc.toUpperCase()})
    .then((data) => {
      res.json(data)
    })
    .catch(err => res.send(err))
}
