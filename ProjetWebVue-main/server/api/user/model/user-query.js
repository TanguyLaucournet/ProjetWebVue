const User = require("../model/User");
const crypt = require('../utils/crypt')
const token = require('../utils/token')

exports.createUser = (userdata) => {
    const user = new User(userdata)
    return user.save().then(() => user)
},

exports.checkUser = (username,pwd) => {
    User.findOne({name: username})
    .then(user => {
    crypt.compareHash(pwd,user.password)
    .then(result => { 
        if(result){
            return token.createToken({userId: user._id})  
        }
      
    })
    
    })
}
