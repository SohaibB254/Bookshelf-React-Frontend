const jwt = require('jsonwebtoken')
const adminModel = require('../models/adminModel');

module.exports = async (req,res,next)=>{
    let token = req.cookies.adminToken
    if(!token){
       return res.status(401).send('Page not found');
    }
    try{
        let decodedData = jwt.verify(token,process.env.ADMIN_SECRET);
        let admin = await adminModel.findOne({email: decodedData.email}).select('-password')
        req.admin = admin;
        next();
    }catch(err){
        res.send(err.messge)
    }
}