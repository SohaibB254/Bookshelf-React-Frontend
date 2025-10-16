const express = require('express')
const router = express.Router();
const userModel = require('../models/userModel')
const { createUser,loginUser, logoutUser } = require('../controllers/authControllers');
const isLoggedIn = require('../middlewares/isLoggedIn');
const upload = require('../config/multer-config');

router.post('/signup',createUser);
router.post('/login',loginUser);
router.get('/logout',logoutUser)
router.get('/profile',isLoggedIn,(req,res)=>{
    res.send('Welcome to profile')
})
//User Profile Picture route
router.put('/addpfp',
    isLoggedIn,
    (req,res,next)=>{req.uploadType = 'user';next()},
    upload.single('image'),
    async(req,res)=>{
        let imagePath = `${req.protocol}://${req.get('host')}/uploads/users/${req.file.filename}`
        let user = await userModel.findOneAndUpdate({email: req.user.email},{pfp: imagePath },{new: true})
        res.redirect(user.pfp)

  })
router.get('/',(req,res)=>{
    res.send('Hey users')
})

module.exports = router;