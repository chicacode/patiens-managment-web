// Controller file

// Cuando se crea un nuevo cliente se recorre una funcion EXPRESS
exports.nuevoCliente = (req, res, next) => {
    // TODO : Insertar en la Base de Datos
    // Se envia los datos del schema con body-parser req.body
    console.log(req.body)
;

    res.json({ mensaje : 'El cliente se agregó correctamente'});
}