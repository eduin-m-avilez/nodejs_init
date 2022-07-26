const express = require('express');

//Middlewares
const { userExists } = require('../middlewares/users.middlewares');

const router = express.Router();

//Controllers
const { 
    getAllUser, 
    createUser, 
    getUserById,
    updateUser,
    deleteUser 
} = require('../controllers/users.controller');

// Enpoint Users

//resultado de la ruta http://localhost:4001/api/v1/users
router.get('/', getAllUser);

 //Enpoint create new user metodo post
router.post('/', createUser);

//Routes Dynamic
// router.get('/:id', userExists, getUserById);

//Update Users
// router.patch('/:id', updateUser);

//Delete user
// router.delete('/:id', deleteUser);

//Se pueden agrupar todas las rutas con el mismo parameto.
router.route('/:id')
    .get( userExists, getUserById)
    .patch(userExists, updateUser)
    .delete(userExists, deleteUser)

module.exports = { usersRouter: router };