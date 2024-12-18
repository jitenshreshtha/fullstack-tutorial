const express = require('express');
const path = require("path");
require('dotenv').config();

const app = express();

// global middlewares
app.use(express.static('public'));

// global environment variables
const PORT = process.env.PORT;


// routes
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "pages/index.html"));
})
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname,'pages/about.html'));
})
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
})
app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, "pages/post.html"));
})

app.listen(PORT, () => {
    console.log(`Server created successfully at ${PORT}`);
})