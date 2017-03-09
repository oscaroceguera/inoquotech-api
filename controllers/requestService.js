const Boom = require('boom')
const uuid = require('uuid')
const _ = require('lodash')

const RequestService = require('../models/RequestService/RequestService')
const RequestCompany = require('../models/RequestService/rs_company')
const ClientCompany = require('../models/client/company')

const {findOneByQuery, saved} = require('../helpers/queries')

const GIRO_COMPANY = {
  'eef691f0-eefe-431e-9864-23287feaf204': require('../models/RequestService/rs_agricola'),
  'ee96e205-7775-445f-9666-843595682629': require('../models/RequestService/rs_acuicola'),
  'adc9e71c-9d41-4482-9b7e-4ae0a4339d95': require('../models/RequestService/rs_procesadora'),
  'c5b5885b-58d4-4164-95a8-5ce10904d8cf': require('../models/RequestService/rs_distribuidora'),
  '48ddf850-317f-4cf7-84e2-2d0e5a89ba0c': require('../models/RequestService/rs_laboratorio'),
  '7a814d5a-ef2a-4699-965c-5f4edad7aa17': require('../models/RequestService/rs_restaurante'),
  '1bf176d4-b193-456d-8f79-cea2a381b17e': require('../models/RequestService/rs_transporte')
}

const GIRO_COMPANY_SECTION = {
  'eef691f0-eefe-431e-9864-23287feaf204': 'agricola',
  'ee96e205-7775-445f-9666-843595682629': 'acuicola',
  'adc9e71c-9d41-4482-9b7e-4ae0a4339d95': 'procesadora',
  'c5b5885b-58d4-4164-95a8-5ce10904d8cf': 'distribuidora',
  '48ddf850-317f-4cf7-84e2-2d0e5a89ba0c': 'laboratorio',
  '7a814d5a-ef2a-4699-965c-5f4edad7aa17': 'restaurante',
  '1bf176d4-b193-456d-8f79-cea2a381b17e': 'transporte'
}

exports.createRequestService = (req, res) => {
  const body = req.body

  const data =  {
    serviceTypes: body.servicio.tipoServicio,
    esquema: body.servicio.esquema,
    hasCertificado: body.servicio.hasCertificado,
    capacitacionTema: body.servicio.capacitacionTema,
    cantidadPersonas: body.servicio.cantidadPersonas,
    nivelJerarquico: body.servicio.nivelJerarquico,
    objetivoMuestras: body.servicio.objetivoMuestras,
    porqueMuestreo: body.servicio.porqueMuestreo,
    tipoMuestreo: body.servicio.tipoMuestreo,
    hasPVM: body.servicio.hasProgramaVigilanciaMonitoreo,
    muestreoFecha: body.servicio.muestreoFecha,
    analisisFecha: body.servicio.analisisFecha,
    labAcreditado: body.servicio.laboratorioAcreditado,
    isClient: body.client ? body.client.isClient : false
  }

  if (data.isClient) {
    data.isClientRFC = body.client.isClientRFC

    findOneByQuery(ClientCompany, {rfc: data.isClientRFC.toUpperCase()})
      .then((datos) => {
        if (datos.length === 0) {
          return res.json(datos)
        }

        saved(RequestService, data)
          .then(dataResponse => res.json(dataResponse))
          .catch(err => Boom.badImplementation(err))
      })
      .catch(err => Boom.badImplementation(err))

  } else {
    const idReferencia = uuid.v4()
    data.company = idReferencia
    const giro = [GIRO_COMPANY_SECTION[body.company.companyGiro]]
    data[giro] = idReferencia

    saved(RequestService, data)
      .then((datos) => {
        const _company = body.company
        _company._id = idReferencia

        saved(RequestCompany, _company)
          .then((datosCompany) => {
            const bodySection = body[GIRO_COMPANY_SECTION[datosCompany.companyGiro]]
            bodySection._id = idReferencia
            const section = GIRO_COMPANY[datosCompany.companyGiro]

            saved(section, bodySection)
              .then((dataSection) => {
                const dataResponse = {
                  solicitud: datos,
                  company: datosCompany,
                  seccion: dataSection
                }
                res.json(dataResponse)
              })
              .catch(err => res.send(Boom.badImplementation(err)))
          })
          .catch(err => res.send(Boom.badImplementation(err)))
      })
      .catch(err => res.send(Boom.badImplementation(err)))
  }
}

exports.getRequestService = (req, res) => {
  RequestService.find()
    .populate('status')
    .populate('serviceTypes')
    .populate('company')
    .populate('agricola')
    .populate('acuicola')
    .populate('distribuidora')
    .populate('procesadora')
    .populate('restaurante')
    .populate('laboratorio')
    .populate('transporte')
    .exec((err, data) => {
      if (!err) {
          res.send(data)
      } else {
        return res.send(Boom.badImplementation(err))
      }
    })
}
