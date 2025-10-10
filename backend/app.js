const express = require('express');
const app = express();
const adminRoutes = require('./routes/adminRoutes')
const userRoutes = require('./routes/userRoutes')
const bookRoutes = require('./routes/bookRoutes')
const connectDB = require('./config/db');
const dotenv = require('dotenv');


dotenv.config() // Load the env file
connectDB();

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/',(req,res)=>{
    res.send('Hellooo')
})
//Routes
app.use('/admin',adminRoutes)
app.use('/users',userRoutes)
app.use('/books',bookRoutes)

app.listen(3000)