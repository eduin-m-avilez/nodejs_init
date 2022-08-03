const express = require('express');

//Routes
const { usersRouter } = require('./routes/users.routes');
const { postsRouter } = require('./routes/posts.routes');

//Utils
const { db } = require('./utils/database');

// Init express app
const app = express();

// Enable incoming JSON data
app.use(express.json());

//Enpoints Users
//Resultado de la ruta http://localhost:4001/api/v1/users
app.use( '/api/v1/users', usersRouter);

//Enpoint Posts
//Resultado de la ruta http://localhost:4001/api/v1/posts
app.use('/api/v1/posts', postsRouter);


//Autenticar base de datos database patters
db.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch(() => console.log(err));

// Sincronizar con base de datos
//db.sync({ force:true }) Elimina la tabla para agregar nuevo campo a la tabla los elementos son eliminados no se recomienda usarlo en produccion
db.sync()
    .then(() => console.log('Database sync'))
    .catch(() => console.log(err));

// Spin up server
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Hello running in ${PORT} !!!`);
});