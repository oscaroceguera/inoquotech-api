const {
  sections, services, countries,
  states, towns, requestStatus
} = require('../controllers/catalogs')
const {createRequestService, getRequestService} = require('../controllers/requestService')
const {addClient, getClientByRfc} = require('../controllers/client')

module.exports = (app) => {
  app
  .get('/catalogs/sectionTypes', sections)
  .get('/catalogs/serviceTypes', services)
  .get('/catalogs/countries', countries)
  .get('/catalogs/states/:id', states)
  .get('/catalogs/towns/:id', towns)
  .get('/catalogs/reqStatusTypes', requestStatus)
  .get('/requestService', getRequestService)
  .post('/requestService', createRequestService)
  .post('/clients', addClient)
  .get('/clients/:rfc', getClientByRfc)
}
