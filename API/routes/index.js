const express = require('express');
const router = express.Router(); // importamos routing
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function(){

    // Agrega nuevos pacientes via POST
    router.post('/pacientes', 
    //tenemos acceso a todas las funciones
        pacienteController.nuevoCliente
    );

    return router; // necesitamos que esté disponible en todas las rutas
}