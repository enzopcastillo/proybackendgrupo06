const {Schema, model} = require('mongoose'); 
const Reuniones = require('./reunion');

const oficinaSchema = new Schema({
    nombre: {type: String, required: true},
    numero: {type: Number, required: true},
    reuniones: [{type: Schema.Types.ObjectId, ref: Reuniones}],
    //numero: {type: Number, required: true},
    horarioApertura: {type: String, required: true},
    horarioCierre: {type: String, required: true},
    diasFuncionamiento: {type: String, required: true},
    piso: {type: Number, required: true},
    edificio: {type: String, required: true},
    cantidadReuniones: {type: Number, required: true}
})

module.exports = model('Oficina', oficinaSchema);