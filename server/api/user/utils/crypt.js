const bcrypt = require('bcrypt')

exports.hash  = async (pwd) => {
  let result = await bcrypt.hash(pwd, 10)
  return result
  
  
}

exports.compareHash = async (pwd, hash) => {
    let result = bcrypt.compare(pwd, hash)
    return result
  }