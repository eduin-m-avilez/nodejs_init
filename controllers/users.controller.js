//Import users
const { User } = require('../model/userModel')

// Function enpoints users
const getAllUser = async (req, res) => {
    try {
        // SELECT * FROM users imprime todos los usuarios en la tabla
        const users = await User.findAll();

        res.status(201).json({
         users,
     });

    } catch (error) {
       console.log(error); 
    }
    
 };

 //Function create new user
 const createUser = async (req,res) => {
    try {
        const { name, email } = req.body;
        //INSERT INTO...Insertar nuevo usuario a la tabla
        const newUser = await User.create({ name, email});

        res.status(201).json({  newUser });
    } catch (error) {
        console.log(error);
    }
    
};

//Function routes dynamics
 const getUserById = async (req, res) =>{
    try {
        //Params guarda el parametro que le pasamos en la ruta 
        const { id } = req.params;
        // SELECT * FROM users WHERE id === ? .. Imprime el parametro del usuario que le ingresemos en este caso es una busqueda po id
        const user = await User.findOne({ where: {id} });

        if(!user){
            return res
                .status(404)
                .json({ 
                    status: 'error', 
                    message: 'User not fount given that id'
                });
        };
       
        res.status(201).json({
            user,
        });

    } catch (error) {
        console.log(error);
    }
 };

 //Function Update user
 const updateUser = async(req, res) =>{
    try {
        const { id } = req.params;
        const { name } = req.body;

        // await User.update({name}, {where: { id }});  //Esta esuna forma de actualizar los datos de los usuarios

        const user = await User.findOne({ where: {id} });

        if(!user){
            return res
                .status(404)
                .json({ 
                    status: 'error', 
                    message: 'User not fount given that id'
                });
        };

        await user.update({ name} );

        res.status(201).json({ 
            status: 'success' 
        });
    } catch (error) {
        console.log(error);
    }
 };

 //Funtion Delete user
 const deleteUser = async(req, res) =>{
    try {
        const { id } = req.params;

        const user = await User.findOne( { where: {id}} );
        if(!user){
            return res
                .status(404)
                .json({ 
                    status: 'error', 
                    message: 'User not fount given that id'
                });
        };

        //Delete FROM... === Delete User: no es aconsejable eliminar los usuarios de las tablas lo lejor es actualizar el estado de los usuarios.
        // await user.destroy();

        await user.update({ status: 'deleted' });

        res.status(201).json({
            status: 'success',
        });

    } catch (error) {
        console.log(error);
    }
 };

 module.exports = { 
    getAllUser, 
    createUser, 
    getUserById, 
    updateUser,
    deleteUser 
};