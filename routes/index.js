const {
  sections, services, solicitud, countries, states, towns
} = require('../controllers/catalogs')

module.exports = (app) => {
  app
  .get('/catalogs/sectionTypes', sections)
  .get('/catalogs/serviceTypes', services)
  .get('/solicitud', solicitud)
  .get('/catalogs/countries', countries)
  .get('/catalogs/states/:id', states)
  .get('/catalogs/towns/:id', towns)
}
