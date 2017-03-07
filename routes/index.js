const Catalogs = require('../controllers/catalogs')

module.exports = (app) => {
  app.get('/catalogs/sectionTypes', Catalogs.sections)
  app.get('/catalogs/serviceTypes', Catalogs.services)
  app.get('/solicitud', Catalogs.solicitud)
}
