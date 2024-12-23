const mongoose = require('mongoose');



const BlogPostSchema = new mongoose.Schema({
    title: String,
    body: String
});



const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;