//Import posts
const { Post } = require('../model/postModel');

//Function Enpoints Posts
const getAllPost = async (req, res) =>{
    try {
        const posts = await Post.findAll();
    
        res.status(201).json({
        posts,
        });

    } catch (error) {
        console.log(error);
    }
    
};

//Function create new post
const createPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body;

        const newPost = await Post.create({ title, content, userId });

        res.status(201).json({
        newPost,
        });

    } catch (error) {
        console.log(error);
    }
    
};

//Route Dynamic
//Consult post for Id
const getPostById = async (req, res) =>{
    try {
        const { post } = req;

        res.status(201).json({
            post,
        });

    } catch (error) {
        console.log(error);
    }
};

//Update post
const updatePost = async (req, res) => {
    try {
        const { post } = req;
        const { title, content } =req.body;

        await post.update({ title, content });

        res.status(201).json({
            status: 'succes'
        });
    } catch (error) {
        console.log(error);
    }
};

//Delete Post
const deletePost = async(req, res) =>{
    try {
        const { post } = req;

        await post.update({ status: 'deleted' });

        res.status(201).json({
            status: 'success',
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { 
    getAllPost, 
    createPost,  
    getPostById,
    updatePost,
    deletePost
};