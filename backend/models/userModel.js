const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    username: String,
    email:String,
    password: String,
    phone:String,
    address: String,
    cardNo: String,
    pfp: String,
    balance: String,
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book'
    }],
    library:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book'
    }],
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book'
    }],

})

 module.exports = mongoose.model('user',userSchema)