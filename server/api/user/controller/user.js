const { deleteOne } = require("../model/User");
const User = require("../model/User");
const user_query = require("../model/user-query")


exports.register  = async (req, res) => {
    const Userdata = new User({
        name: req.body.name,
        password: req.body.password,
        secret: req.body.secret,
      });
    try{ 
        const user = await user_query.createUser(Userdata)
        res.status(201).json({user})
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}





exports.login = async (req,res, next) => {
    const username = req.body.name
    const pw = req.body.password
    try{ 
        const token = await user_query.checkUser(username,pw)
        res.status(201).json({token})
    }
    catch(err){
        res.status(400).json({message: err.message})
    }

};

exports.secret = (req,res,next) => {
    res.json(req.secret)
}