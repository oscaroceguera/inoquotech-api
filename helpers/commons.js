const crypto = require('crypto')
const ALGORITHM = global.config.algorithm
const PRIVATE_KEY = global.config.privateKey

exports.encrypt = (password) => encrypt(password)

function encrypt(password) {
  const cipher = crypto.createCipher(ALGORITHM, PRIVATE_KEY)
  let crypted = cipher.update(password, 'utf8', 'hex')
  crypted += cipher.final('hex')
  return crypted
}
