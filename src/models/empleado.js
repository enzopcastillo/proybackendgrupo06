const Dependencia = require('./dependencia');
const {Schema, model} = require('mongoose');

const empleadoSchema = new Schema({
    apellido: {type: String, required: true},
    nombre: {type: String, required: true},
    legajo: {type: String, required: true},
    email: {type: String, required: true},
    dependencia: {type: Schema.Types.ObjectId, ref: Dependencia, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    rol: {type: String, required: true},
})

module.exports = model('Empleado', empleadoSchema);