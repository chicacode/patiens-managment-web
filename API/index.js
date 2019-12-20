// Main file Project BACKEND
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors =  require('cors'); // CORS

// create server
const app = express();

// Habilitar CORS - Asegurar RESTAPI
const whileList = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        // console.log(origin);
        const existe = whileList.some( dominio => dominio === origin );
        if( existe ){
            callback(null, true)
        }else{
            callback(new Error(' Error: No permitido por CORS'))
        }
    }
}


// habilitar CORS
app.use(cors()); // De esta forma queda abierto CORS

// Se agrega todo lo que se requiere
// conectar a MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// habilitar Routing - Middlewares
app.use('/', routes())

// Puerto arrancar servidor
app.listen(5000, () => {
    console.log('Servidor funcionando');
});



