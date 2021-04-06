const jwt = require('jsonwebtoken')

const options = {
  expiresIn: '1h'
}

exports.createToken = async (payload) => {
  const secret = "secret"
  const token =await jwt.sign(payload, secret, options)
  
  return token
}