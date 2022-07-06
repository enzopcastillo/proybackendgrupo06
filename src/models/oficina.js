const {Schema, model} = require('mongoose'); 
const Reuniones = require('./reunion');

const oficinaSchema = new Schema({
    nombre: {type: String, required: true},
    reuniones: [{type: Schema.Types.ObjectId, ref: Reuniones}],
    numero: {type: Number, required: true},
    piso: {type: Number, required: true},
    edificio: {type: String, required: true}
})

module.exports = model('Oficina', oficinaSchema);