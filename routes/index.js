const {
  sections, services, solicitud, countries,
  states, towns, requestStatus
} = require('../controllers/catalogs')
const {createRequestService, getRequestService} = require('../controllers/requestService')

module.exports = (app) => {
  app
  .get('/catalogs/sectionTypes', sections)
  .get('/catalogs/serviceTypes', services)
  .get('/solicitud', solicitud)
  .get('/catalogs/countries', countries)
  .get('/catalogs/states/:id', states)
  .get('/catalogs/towns/:id', towns)
  .get('/catalogs/reqStatusTypes', requestStatus)
  .get('/requestService', getRequestService)
  .post('/requestService', createRequestService)
}
