const Empleado = require('./empleado');
const {Schema, model} = require('mongoose');

const administradorSchema = new Schema({
    empleado: {type: Schema.Types.ObjectId, ref: Empleado, required: true},
})

module.exports = model('Administrador', administradorSchema);