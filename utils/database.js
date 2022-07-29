const { Sequelize } = require('sequelize');

//Conect ORM Sequelize database patters
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1040&6768',
    database: 'patters',
    logging: false  //Evita que se visualice  en la consola los cambios realizados
});

module.exports = { db };