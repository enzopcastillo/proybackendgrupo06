const {Schema, model} = require('mongoose');
const TipoReunion = require('./tipoReunion');
const Oficina = require('./oficina');
const Empleado = require('./empleado');
const Recurso = require('./recurso');
const Notificacion = require('./notificacion');

const reunionSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    fecha: {type: String, required: true},
    horaReunion: {type: String, required: true},
    horaFinalizacion: {type: String, required: true},
    tipoReunion: {type: Schema.Types.ObjectId, ref: TipoReunion},
    estadoReunion: {type: String, required: true},
    oficina: {type: Schema.Types.ObjectId, ref: Oficina},
    participantes: [{type: Schema.Types.ObjectId, ref: Empleado}],
    recursos: [{type: Schema.Types.ObjectId, ref: Recurso}],
    prioridad: {type: Number, required: true},
    codigoQr: {type: String, required: false},
    notificacion: [{type: Schema.Types.ObjectId, ref: Notificacion}]
})

module.exports = model('Reunion', reunionSchema);