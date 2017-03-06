const Catalogs = require('../controllers/catalogs')

module.exports = (app) => {
  app.get('/catalogs/sectionTypes', Catalogs.sections)
}
