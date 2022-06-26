const Reuniones = require('./reunion');
const {Schema, model} = require('mongoose'); 

const reunionSchema = new Schema({
    reuniones: [{type: Schema.Types.ObjectId, ref: Reuniones, required: true}],
    numero: {type: Number, required: true},
    horarioApertura: {type: String, required: true},
    horaCierre: {type: String, required: true},
    diasFuncionamiento: {type: String, required: true},
    piso: {type: Number, required: true},
    edificio: {type: String, required: true},
    cantidadReuniones: {type: Number, required: true}
})

module.exports = model('Reunion', reunionSchema);