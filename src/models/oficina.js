const {Schema, model} = require('mongoose'); 
const Reuniones = require('./reunion');

const oficinaSchema = new Schema({
    nombre: {type: String, required: true},
    reuniones: [{type: Schema.Types.ObjectId, ref: Reuniones}],
    edificio: {type: String, required: true},
    piso: {type: Number, required: true},
    numero: {type: Number, required: true}
})

module.exports = model('Oficina', oficinaSchema);