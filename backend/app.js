const express = require('express');
const app = express();
const adminRoutes = require('./routes/adminRoutes')
const userRoutes = require('./routes/userRoutes')
const bookRoutes = require('./routes/bookRoutes')
const orderRoutes = require('./routes/orderRoutes')
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');


dotenv.config() // Load the env file
//Connect to db
connectDB();

//Middlewares
app.use(express.json());
app.use(cookieParser()) //The lines lets routes use cookies for authorization
app.use('/uploads',express.static("uploads")) //This line serves the static images to frontend
app.use(express.urlencoded({extended: true}))
app.get('/',(req,res)=>{
    res.send('Hellooo')
})
//Routes
app.use('/admin',adminRoutes)
app.use('/users',userRoutes)
app.use('/books',bookRoutes)
app.use('/orders', orderRoutes)

app.listen(3000)