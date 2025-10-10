const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

module.exports.createUser = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let foundUser = await userModel.findOne({ email: email })
        if (foundUser) {
            res.status(404).send('email already registered');
        }
        else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, async (err, hash) => {
                    if (err) { return res.send(err.message); }

                    else {
                        let user = await userModel.create({
                            username,
                            email,
                            password: hash
                        })
                       
                    }
                })
            })
        }

    } catch (error) {
        console.log(error.message)
    }
}