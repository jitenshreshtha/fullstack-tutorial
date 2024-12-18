const express = require('express');
const path = require("path");
require('dotenv').config();
const ejs = require('ejs');

const app = express();

// global middlewares
app.use(express.static('public'));
app.set('view engine','ejs');

// global environment variables
const PORT = process.env.PORT;


// routes
app.get('/', (req, res) => {
    res.render('index');
})
app.get('/about', (req, res) => {
   res.render('about');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
app.get('/post', (req, res) => {
    res.render('post');
})



// listening to the port 
app.listen(PORT, () => {
    console.log(`Server created successfully at ${PORT}`);
})