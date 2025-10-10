const express = require('express')
const router = express.Router()
const bookModel = require('../models/bookModel')

router.post('/addbook',async (req,res)=>{
    try {
        let {title, author,price, length,category } = req.body;
        let newBook = await bookModel.create({
        title,
        author,
        price,
        category,
        length
    })
    res.send(newBook)
    } catch (error) {
        console.log(error)
    }



})
module.exports = router;