const mongoose = require('mongoose');
const Schema = mongoose.Schema; //  crea la estructura en la base de datos

// Schema es una nueva tabla de Bases de Datos con campos:
const pacientesSchema = new Schema({
    nombre :{
        type: String,
        trim: true
    }, 
    propietario: {
        type: String, 
        trim: true
    }, 
    fecha: {
        type: String,
        trim: true // para que corte espacios en blanco
    }, 
    hora: {
        type: String, 
        trim: true
    },
    telefono: {
        type: String, 
        trim: true
    },
    sintomas: {
        type: String,
        trim: true
    }
});
// con esta funcion se crea el modelo
module.exports = mongoose.model('Paciente', pacientesSchema); // exportar el modulo para usarlo en otros archisvos