const express = require('express')
const router = express.Router();
const adminModel = require('../models/adminModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const isAdmin = require('../middlewares/isAdmin')
const upload = require('../config/multer-config')

router.post('/register', async (req, res) => {

    if (process.env.NODE_ENV !== 'development') {
        return res.status(401).send('Access Denied| Unauthorized')
    }
    try {
        let { username, email, password } = req.body;

        let adminExist = await adminModel.findOne();
        if (adminExist) return res.status(401).send('Access Denied | admin exist');
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                let admin = await adminModel.create({
                    username,
                    email,
                    password: hash,
                })
                let token = jwt.sign({ email: admin.email }, process.env.ADMIN_SECRET);
                res.cookie('adminToken', token)
                res.send('Admin approved')
            })
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
})
//Admin only route
//Admin Profile Picture route
router.put('/addpfp',
    isAdmin,
    (req, res, next) => { req.uploadType = 'user'; next() },
    upload.single('image'),
    async (req, res) => {
        try {
            let imagePath = `${req.protocol}://${req.get('host')}/uploads/users/${req.file.filename}`
            let admin = await adminModel.findOneAndUpdate({ email: req.admin.email }, { pfp: imagePath }, { new: true })
            res.redirect(admin.pfp)
        } catch (error) {
            res.send(error.message)
        }


    })
router.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body
        let foundAdmin = await adminModel.findOne({ email: email })
        if (!foundAdmin) {
            return res.status(501).send('Access Denied')
        } else {
            bcrypt.compare(password, foundAdmin.password, (err, result) => {

                if (result) {
                    let token = jwt.sign({ email: foundAdmin.email }, process.env.ADMIN_SECRET);
                    res.cookie('adminToken', token)
                    res.send('Admin approved')
                } else {
                    res.status(500).send('Email or password incorrect')
                }
            });
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
})
module.exports = router