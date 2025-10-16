const express = require('express')
const router = express.Router()
const bookModel = require('../models/bookModel')
const upload = require('../config/multer-config')
const isLoggedIn = require('../middlewares/isLoggedIn')
const userModel = require('../models/userModel')
//add a book to db
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
//Dynamic route to add book ids in cart,wishlish and library
router.post('/:list/:bookId', isLoggedIn, async (req, res) => {
    try {
        const { list, bookId } = req.params;
        const userId = req.user._id;

        const validLists = ['cart', 'wishlist', 'library'];
        if (!validLists.includes(list)) {
            return res.status(400).send('Invalid list type');
        }

        const user = await userModel.findById(userId);

        // If it's the cart, handle quantity
        if (list === 'cart') {
            // Find if the item already exists in cart
            const existingItem = user.cart.find(
                (item) => item.book.toString() === bookId
            );

            if (existingItem) {
                existingItem.quantity += 1; // increment quantity
                await user.save();
                return res.send('Book quantity increased in cart');
            } else {
                user.cart.push({ book: bookId, quantity: 1 });
                await user.save();
                return res.send('Book added to cart');
            }
        }

        // For wishlist or library — no duplicates allowed
        if (user[list].includes(bookId)) {
            return res.status(400).send(`Book already in ${list}`);
        }

        user[list].push(bookId);
        await user.save();
        res.send(`Book added to ${list}`);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});
// Dynamic route to get books as json from cart,wishlist and library
router.get('/:list/getbooks', isLoggedIn, async (req, res) => {
    try {
        const { list } = req.params;
        const validLists = ['cart', 'wishlist', 'library'];
        if (!validLists.includes(list)) {
            return res.status(400).send('Invalid list type');
        }

        const user = await userModel
            .findById(req.user._id)
            .populate(list === 'cart' ? 'cart.book' : list);

        if (!user) return res.status(404).send('User not found');

        // Only apply calculations for the cart
        if (list !== 'cart') {
            return res.json(user[list]);
        }

        let totalItems = 0;
        let totalOriginal = 0;
        let totalDiscount = 0;
        let totalDelivery = 0;

        const booksWithTotals = [];

        for (const cartItem of user.cart) {
            const book = cartItem.book;
            const qty = cartItem.quantity || 1;

            if (!book) continue;

            const price = Number(book.price || 0);
            const original = price * qty;
            const discountPercent = Number(book.discountPercent ?? 0);
            const discountAmount = (original * discountPercent) / 100;
            const deliveryCost = Number(book.deliveryFee ?? 0);

            totalItems += qty;
            totalOriginal += original;
            totalDiscount += discountAmount;
            totalDelivery += deliveryCost; // base total before discount logic

            booksWithTotals.push({
                book: {
                    _id: book._id,
                    title: book.title,
                    price,
                },
                quantity: qty,
                original,
                discountPercent,
                discountAmount,
                deliveryFee: book.deliveryFee ?? 0,
            });
        }

        // Shared delivery logic 👇
        const averageDelivery = Math.round(totalItems > 0 ? totalDelivery / totalItems : 0);
        const totalAfterDiscount = totalOriginal - totalDiscount;
        const finalTotal = totalAfterDiscount + averageDelivery;

        res.json({
            books: booksWithTotals,
            totalItems,
            totalOriginal,
            totalDiscount,
            totalAfterDiscount,
            totalDeliveryBeforeSplit: totalDelivery,
            sharedDeliveryPerItem: averageDelivery,
            finalTotal,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});


//Dynamic route to remove books from cart,wishlist and library
router.delete('/:list/:bookId/remove', isLoggedIn, async (req, res) => {
    try {
        const { list, bookId } = req.params;
        const userId = req.user._id

        const validLists = ['cart', 'wishlist', 'library'];
        if (!validLists.includes(list)) {
            return res.status(500).send("invalid list")
        }
        let user = await userModel.findById(userId);
        // For lists that store plain IDs (wishlist/library)
        user[list] = user[list].filter(item => item.toString() !== bookId);

        // For cart (array of objects like { book, quantity })
        if (list === 'cart') {
            user.cart = user.cart.filter(item => item.book.toString() !== bookId);
        }
        await user.save()
        res.send(`Item removed from ${list}`)

    } catch (error) {
        res.status(500).send(error.message)
    }

})


module.exports = router;