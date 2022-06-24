const Empleado = require('./empleado');
const Reunion = require('./reunion');
const Notificacion = require('./notificacion');
const {Schema, model} = require('mongoose');

const administradorSchema = new Schema({
    empleado: {type: Schema.Types.ObjectId, ref: Empleado, required: true},
    reuniones: {type: Schema.Types.ObjectId, ref: Reunion, required: true},
    notificaciones: {type: Schema.Types.ObjectId, ref: Notificacion, required: true},
    cantidadReuniones: {type: Number, required: true},
})

module.exports = model('Administrador', administradorSchema);