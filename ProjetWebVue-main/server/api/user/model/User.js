const mongoose = require('mongoose');
const crypt = require('../utils/crypt')

const userSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      unique: false
    },
    secret:{
      type: String,
      required: true,
      unique: false 
    }
  });


  userSchema.pre('save', function preSave (next) {
    const user = this  
    crypt.hash(user.password)
      .then(result => {
        user.password = result
        next();
      }) 
    

  })


const User = mongoose.model("User",userSchema);
module.exports = User;
