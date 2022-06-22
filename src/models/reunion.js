const TipoReunion = require('./tipoReunion');
const EstadoReunion = require('./estadoReunion');
const Oficina = require('./oficina');
const Participante = require('./participante');
const Recurso = require('./recurso');
const {Schema, model} = require('mongoose');

const reunionSchema = new Schema({
    fecha: {type: String, required: true},
    horaReunion: {type: String, required: true},
    horaFinalizacion: {type: String, required: true},
    tipoReunion: {type: Schema.Types.ObjectId, ref: TipoReunion, required: true},
    estadoReunion: {type: Schema.Types.ObjectId, ref: EstadoReunion, required: true},
    oficina: {type: Schema.Types.ObjectId, ref: Oficina, required: true},
    participantes: {type: Schema.Types.ObjectId, ref: Participante, required: true},
    recursos: {type: Schema.Types.ObjectId, ref: Recurso, required: true},
    prioridad: {type: Number, required: true},
    codigoQr: {type: String, required: true},
})

module.exports = model('Reunion', reunionSchema);