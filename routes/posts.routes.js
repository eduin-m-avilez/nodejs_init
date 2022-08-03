const express = require('express');

//Middlewares
const {  postExists } = require('../middlewares/posts.middlewares');

const router = express.Router();

//Controllers
const { 
    getAllPost, 
    createPost ,
    getPostById, 
    updatePost,
    deletePost
} = require('../controllers/posts.controller');

//Enpoint Posts

//Resultado de la ruta http://localhost:4001/api/v1/posts
router.get('/', getAllPost);

//Enpoint new post metodo post
router.post('/', createPost);

//Routes Dynamic
router.route('/:id')
    .get(postExists, getPostById)
    .patch(postExists, updatePost)
    .delete(postExists, deletePost)

module.exports = { postsRouter: router };