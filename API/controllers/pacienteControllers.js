// Controller file
const Paciente = require('../models/Paciente');
// Cuando se crea un nuevo cliente se recorre una funcion EXPRESS
exports.nuevoCliente = async (req, res, next) => {
    // TODO : Insertar en la Base de Datos
    // Se envia los datos del schema con body-parser req.body
    // crear objeto de Paciente con datos de REQ.BODY
    const paciente = new Paciente(req.body);
    try {
        await paciente.save(); // save() es un metodo de mongo que sirve para guardar
        res.json({ mensaje : 'El cliente se agregó correctamente'});
    }catch(error){
        console.log(error);
        next();
    }
}

// Obtiene todos los pacientes
exports.obtenerPacientes = async (req, res, nex) => {
    try{
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    }catch(error){
        console.log(error);
        next();
    }
}