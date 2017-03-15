const {
  sections, services, countries,
  states, towns, requestStatus, modules,
  userStatuses
} = require('../controllers/catalogs')
const {createRequestService, getRequestService} = require('../controllers/requestService')
const {addClient, getClientByRfc} = require('../controllers/client')
const {addUser, getUsers, userById} = require('../controllers/users')

module.exports = (app) => {
  app
  .get('/catalogs/sectionTypes', sections)
  .get('/catalogs/serviceTypes', services)
  .get('/catalogs/countries', countries)
  .get('/catalogs/states/:id', states)
  .get('/catalogs/towns/:id', towns)
  .get('/catalogs/reqStatusTypes', requestStatus)
  .get('/catalogs/moduleTypes', modules)
  .get('/catalogs/userStatusTypes', userStatuses)
  .get('/requestService', getRequestService)
  .post('/requestService', createRequestService)
  .post('/clients', addClient)
  .get('/clients/:rfc', getClientByRfc)
  .post('/users', addUser)
  .get('/users', getUsers)
  .get('/users/:id', userById)
}
