const mongoose = require('mongoose');
const {Schema} = mongoose;
//const {Schema, model} = require('mongoose');
const TipoReunion = require('./tipoReunion');
const Oficina = require('./oficina');
const Empleado = require('./empleado');
const Recurso = require('./recurso');

const reunionSchema = new Schema({
    fecha: {type: String, required: true},
    horaReunion: {type: String, required: true},
    horaFinalizacion: {type: String, required: true},
    tipoReunion: {type: Schema.Types.ObjectId, ref: TipoReunion, required: true},
    estadoReunion: {type: String, required: true},
    oficina: {type: Schema.Types.ObjectId, ref: Oficina, required: true},
    participantes: [{type: Schema.Types.ObjectId, ref: Empleado, required: true}],
    recursos: [{type: Schema.Types.ObjectId, ref: Recurso, required: true}],
    prioridad: {type: Number, required: true},
    codigoQr: {type: String, required: true},
})

//module.exports = model('Reunion', reunionSchema);
module.exports = mongoose.models.Reunion || mongoose.model('Reunion', reunionSchema);