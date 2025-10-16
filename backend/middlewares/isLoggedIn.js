const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel')
module.exports = async (req,res,next)=>{
    if(!req.cookies.token){
       return res.status(400).send('Plz login first');
    }
    try{
        let decodedData = jwt.verify(req.cookies.token,process.env.SECRET);
        let user = await userModel.findOne({email: decodedData.email}).select('-password')
        req.user = user;
        next();
    }catch(err){
        res.send(err.messge)
    }
}