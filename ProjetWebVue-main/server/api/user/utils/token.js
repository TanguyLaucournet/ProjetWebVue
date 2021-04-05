const jwt = require('jsonwebtoken')

const options = {
  expiresIn: '1h'
}

exports.createToken = (payload) => {
  const secret = "secret"
  const token = jwt.sign(payload, secret, options)
  return token
}