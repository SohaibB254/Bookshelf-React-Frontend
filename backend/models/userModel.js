const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    username: String,
    email:String,
    password: String,
    phone:String,
    address: String,
    cardNo: {type: String,
        default: ''
    },
    pfp:  {type: String,
        default: ''
    },
    balance: {type: Number,
        default: 0
    },
    gender: String,
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    library:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],

})

 module.exports = mongoose.model('user',userSchema)