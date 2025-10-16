const express = require('express')
const router = express.Router()
const bookModel = require('../models/bookModel')
const upload = require('../config/multer-config')
const isLoggedIn = require('../middlewares/isLoggedIn')
const userModel = require('../models/userModel')

router.post('/addbook',
    (req, res, next) => {
        req.uploadType = "book"
            , next()
    },
    upload.single('image'), async (req, res) => {
        try {

            const imagePath = req.file ? `/uploads/books/${req.file.filename}` : null

            let { title, author, price, length, category } = req.body;
            let newBook = await bookModel.create({
                title,
                author,
                price,
                category,
                length,
                image: imagePath
            })
            await newBook.save()
            res.send(newBook)
        } catch (error) {
            console.log(error)
        }
    })
//Test route for serving images
router.get('/bookcover', async (req, res) => {
    try {
        let book = await bookModel.findOne({ title: 'Js' })
        res.set('Content-Type', book.image.contentType);
        res.redirect(`http://localhost:3000${book.image}`)
    } catch (error) {
        res.send(error.message)
    }

})
//Add to cart route
router.get('/:id/addtocart', isLoggedIn, async (req, res) => {
    try {
        let  userId = req.user._id
        let  bookId  = req.params.id;
        const user = await userModel.findById(userId);
        //Add book id to cart array
        user.cart.push(bookId)
        await user.save();

        res.send('Book Added to cart')
    } catch (err) {
        res.status(500).send(err.message)
    }
})
router.get('/cart',isLoggedIn, async (req,res)=>{
    //Populates the cart array from the ids of books
    const user = await userModel.findById(req.user._id).populate('cart')
    //Return the list of books in cart as json
    res.json(user.cart)
})
module.exports = router;