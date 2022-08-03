const { User } = require('../model/userModel');

const userExists = async (req, res, next) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ where: {id} });

        if(!user){
            return res
                .status(404)
                .json({ 
                    status: 'error', 
                    message: 'User not fount given that id'
                });
        };

        // Add user data to the req object
        req.user = user;
        next();

    } catch (error) {
        console.log(error);
    }
};

module.exports = { userExists };