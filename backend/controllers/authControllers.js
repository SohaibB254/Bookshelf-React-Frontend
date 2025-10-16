const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/generateToken');
//Register/signup user route
module.exports.createUser = async (req, res) => {
    try {
        let { username, email, password, address, phone, gender } = req.body;
        const [existingEmail, existingUsername] = await Promise.all([
            userModel.findOne({ email: new RegExp(`^${email}$`, "i") }),
            userModel.findOne({ username: new RegExp(`^${username}$`, "i") })
        ]);

        if (existingEmail) {
            return res.status(400).send("Email already registered");
        }
        if (existingUsername) {
            return res.status(400).send("Username already taken");
        }
        else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, async (err, hash) => {
                    if (err) { return res.send(err.message); }

                    else {
                        let user = await userModel.create({
                            username,
                            email,
                            address,
                            phone,
                            gender,
                            password: hash
                        })
                        let token = generateToken(user)
                        res.cookie('userToken', token)
                        res.send(user)

                    }
                })
            })
        }

    } catch (error) {
        console.log(error.message)
    }
}
//Login user route
module.exports.loginUser = async (req, res) => {
    try {
        let { email, password } = req.body
        let foundUser = await userModel.findOne({ email: email })
        if (!foundUser) {
            return res.status(500).send('Email or password incorrect')
        } else {
            bcrypt.compare(password, foundUser.password, (err, result) => {

                if (result) {
                    let token = generateToken(foundUser)
                    res.cookie('userToken', token)
                    res.send('User Logged in')
                } else {
                    res.status(500).send('Email or password incorrect')
                }
            });
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}
//Logout user route
module.exports.logoutUser = (req, res) => {
    res.cookie('userToken', "");
    res.send('User logged out')
}