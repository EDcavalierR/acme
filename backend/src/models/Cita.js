const { Schema, model} = require('mongoose');

const CitaSchema = new Schema({
    IdCita: String,
    Duracion: Number,
    TipoCita: String,
    LimiteCitas: Number,
    EstadoCita: Boolean,
    PrecioCita: Number,
    FechaCita: Date,
    HoraCita: Number,
})

module.exports = model('Cita', CitaSchema);