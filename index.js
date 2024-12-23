const express = require('express');
const path = require("path");
require('dotenv').config();
const ejs = require('ejs');
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

const app = express();
 
// global middlewares
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// global environment variables
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;


// mongodb connection 
mongoose.connect(MONGODB_URL).then(() => {
    console.log('DB connected successfully');
})

// routes
app.get('/', async (req, res) => {
    const blogPosts = await BlogPost.find({});
    console.log(blogPosts);
    res.render('index', { blogPosts });
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
app.get('/posts/new', (req, res) => {
    res.render('create');
})
app.post('/posts/store', (req, res) => {
    console.log(req.body);
    BlogPost.create(req.body);
    res.redirect('/');
})

// listening to the port 
app.listen(PORT, () => {
    console.log(`Server created successfully at ${PORT}`);
})