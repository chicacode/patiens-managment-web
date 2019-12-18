// Controller file

// Cuando se crea un nuevo cliente se recorre una funcion EXPRESS
exports.nuevoCliente = (req, res, next) => {
    // TODO : Insertar en la Base de Datos


    res.json({ mensaje : 'El cliente se agregó correctamente'});
}