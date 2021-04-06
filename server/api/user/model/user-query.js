const User = require("../model/User");
const crypt = require('../utils/crypt')
const token = require('../utils/token')

exports.createUser = (userdata) => {
    const user = new User(userdata)
    return user.save().then(() => user)
},

exports.checkUser =  async (username,pwd ) => {
    const user = await User.findOne({name: username})
    const result = await crypt.compareHash(pwd,user.password)
    if(result){
        const tok = await token.createToken({userId: user._id})
        return tok
    }
}
