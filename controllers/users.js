const Boom = require('boom')
const uuid = require('uuid')
const _ = require('lodash')
const Common = require('../helpers/commons')
const Jwt = require('jsonwebtoken')
const User = require('../models/user/user')
const isEmail = require('email-validator')
const {findAll, saved, findById, findOneByQuery} = require('../helpers/queries')

const USER_MESSAGES = {
  'name': 'Nombre requerido',
  'firstName': 'Apellido requerido',
  'secondName': 'Apellido requerido',
  'email': 'Email requerido',
  'password': 'Contraseña requerida',
  'moduleTypes': 'Tipo de modulo requerido',
  'emailFormat': 'Formato email'
}


exports.addUser = (req, res) => {
  const body = req.body
  req.body.password = Common.encrypt(req.body.password)

  if (!body.name) return res.send(Boom.badRequest(USER_MESSAGES['name']))
  if (!body.firstName) return res.send(Boom.badRequest(USER_MESSAGES['firstName']))
  if (!body.secondName) return res.send(Boom.badRequest(USER_MESSAGES['secondName']))
  if (!body.email) return res.send(Boom.badRequest(USER_MESSAGES['email']))
  if (!isEmail.validate(body.email)) return res.send(Boom.badRequest(USER_MESSAGES['emailFormat']))
  if (!body.password) return res.send(Boom.badRequest(USER_MESSAGES['password']))
  if (!body.moduleTypes) return res.send(Boom.badRequest(USER_MESSAGES['moduleTypes']))

  User.find({email: body.email}, (err, data) => {
    if (data.length === 0) {
      return saved(User, req.body)
        .then((dataFind) => {
          const dataUser = {
            id: dataFind._id,
            name: dataFind.name,
            firstName: dataFind.firstName,
            secondName: dataFind.secondName,
            email: dataFind.email,
            userStatus: dataFind.userStatus,
            moduleTypes: dataFind.moduleTypes,
            created_at: dataFind.created_at,
            updated_at: dataFind.updated_at
          }
          res.json(dataUser)
        }, (err) => res.send(err))
        .catch(err => Boom.badImplementation(err))
    }

    return res.send(Boom.notAcceptable('Email se encuencuentra registrado'))
  })
}

exports.getUsers = (req, res) =>
  findAll(User, 'userStatus', 'moduleTypes')
    .then(data => {
      const userData = data.map((data) => {
        const dataJSON = {
          id: data._id,
          name: data.name,
          firstName: data.firstName,
          secondName: data.secondName,
          email: data.email,
          userStatus: data.userStatus,
          moduleTypes: data.moduleTypes,
          created_at: data.created_at,
          updated_at: data.updated_at
        }
        return dataJSON
      })
      res.json(userData)
    }, (err) => res.send(Boom.notFound(err)))
    .catch(err => Boom.badImplementation(err))

exports.userById = (req, res) => {
  findById(User, req.params.id, 'Usuario')
    .then((data) => {
      res.json(data)
    }, (err) => {
      res.send(Boom.notFound(err))
    })
    .catch(err => Boom.badImplementation(err))
}
