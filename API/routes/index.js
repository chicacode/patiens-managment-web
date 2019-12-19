const express = require('express');
const router = express.Router(); // importamos routing
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function(){
    // ENDPOINTS
    // Agrega nuevos pacientes via POST
    router.post('/pacientes', 
    //tenemos acceso a todas las funciones
        pacienteController.nuevoCliente
    );

    // Get all registers from Database
    router.get('/pacientes', 
        pacienteController.obtenerPacientes
    );

    // Get one specific patient
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    // actualizar un registro con ID específico
    router.put('/pacientes/:id/',
        pacienteController.actualizarPAciente
    );


    return router; // necesitamos que esté disponible en todas las rutas
}