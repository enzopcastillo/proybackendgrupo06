const {Schema, model} = require('mongoose');
const Dependencia = require('./dependencia');
const Reunion = require('./reunion');
const Notificacion = require('./notificacion');

const empleadoSchema = new Schema({
    apellido: {type: String, required: true},
    nombre: {type: String, required: true},
    legajo: {type: String, required: true},
    email: {type: String, required: true},
    dependencia: {type: Schema.Types.ObjectId, ref: Dependencia, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    rol: {type: String, required: true},
    reuniones: [{type: Schema.Types.ObjectId, ref: Reunion, required: true}],
    cantidadReuniones: {type: Number, required: true}, 
    notificaciones: [{type: Schema.Types.ObjectId, ref: Notificacion, required: true}],
    estadoEmpleado: {type: Boolean, required: true},
})

module.exports = model('Empleado', empleadoSchema);