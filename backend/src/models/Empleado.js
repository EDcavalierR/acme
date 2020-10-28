const { Schema, model} = require('mongoose');

const EmpleadoSchema = new Schema({
    DNI: String,
    Nombres: String,
    Apellidos: String,
    Telefono: Number,
    Celular: Number,
    Correo: String,
    TipoUsuario: Number,
    Usuario: String,
    Contraseña: String,
})

module.exports = model('Empleado', EmpleadoSchema);