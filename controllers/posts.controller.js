//Import posts
const { Post } = require('../model/postModel');

//Function Enpoints Posts
const getAllPost = async (req, res) =>{
    const posts = await Post.findAll();
    
    res.status(201).json({
        posts,
    });
};

//Function create new post
const createPost = async (req,res) => {
    const { title, content } = req.body;

    const newPost = await Post.create({ title, content });

    res.status(201).json({
        newPost,
    });
};

module.exports = { getAllPost, createPost };