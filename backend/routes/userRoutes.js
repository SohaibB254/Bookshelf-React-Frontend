const express = require('express')
const router = express.Router();
const userModel = require('../models/userModel')
const { createUser } = require('../controllers/authControllers')

router.post('/signup',createUser);

router.get('/',(req,res)=>{
    res.send('Hey users')
})

module.exports = router;