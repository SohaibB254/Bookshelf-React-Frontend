const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    phone: String,
    address: {
        street: String,
        city: String,
        zip: String,
        country: String
    },
    cardNo: {
        type: String,
        default: ''
    },
    pfp: {
        type: String,
        default: ''
    },
    balance: {
        type: Number,
        default: 0
    },
    gender: String,
    cart: [{
        book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
        quantity: { type: Number, default: 1 }
    }],
    library: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    }],

})

module.exports = mongoose.model('user', userSchema)