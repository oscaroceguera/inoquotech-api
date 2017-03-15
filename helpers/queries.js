exports.findAll = (model, popu1 = '', popu2 = '') => {
  const message = 'no se encontraron registros'
  return new Promise((resolve, reject) => {
    model.find({}, (err, data) => {
      if (!err) {
        if (data.length === 0) {
          return reject(message.toUpperCase())
        }
        resolve(data)
      } else {
        reject(err)
      }
    })
    .populate(popu1)
    .populate(popu2)
  })
}

exports.findById = (model, id, mess) => {
  const message = `${mess} no encontrado`
  return new Promise((resolve, reject) => {
    model.findById(id, (err, data) => {
      if (!err) {
        if (data === null) {
          return reject(message.toUpperCase())
        }
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

exports.findOneByQuery = (model, query) => {
  return new Promise((resolve, reject) => {
    model.find(query, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

exports.saved = (model, body) => {
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
