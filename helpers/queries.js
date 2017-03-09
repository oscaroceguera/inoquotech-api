exports.findAll = (model) => {
  return new Promise((resolve, reject) => {
    model.find({}, (err, data) => {
      if (!err) {
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
