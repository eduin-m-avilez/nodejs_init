const express = require('express');

const router = express.Router();

//Controllers
const { getAllPost, createPost } = require('../controllers/posts.controller');

//Enpoint Posts

//Resultado de la ruta http://localhost:4001/api/v1/posts
router.get('/', getAllPost);

//Enpoint new post metodo post
router.post('/', createPost);

module.exports = { postsRouter: router };