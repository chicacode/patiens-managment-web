// Main file Project BACKEND
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// create server
const app = express();

// Se agrega todo lo que se requiere
// conectar a MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// habilitar Routing - Middlewares
app.use('/', routes())

// Puerto arrancar servidor
app.listen(4000, () => {
    console.log('Servidor funcionando')
})



