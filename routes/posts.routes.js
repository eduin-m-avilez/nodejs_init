const express = require('express');

//Middlewares
const {  postExists } = require('../middlewares/posts.middlewares');

//Controllers
const { 
    getAllPost, 
    createPost ,
    getPostById, 
    updatePost,
    deletePost
} = require('../controllers/posts.controller');

const router = express.Router();

//Enpoint Posts

//Resultado de la ruta http://localhost:4001/api/v1/posts
router
    .route('/')
    .get(getAllPost)
    .post(createPost);

//Routes Dynamic
router
    .use('/:id', postExists)
    .route('/:id')
    .get(getPostById)
    .patch(updatePost)
    .delete(deletePost)

module.exports = { postsRouter: router };