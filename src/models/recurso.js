const Reunion = require('./reunion');
const {Schema, model} = require('mongoose'); 

const recursoSchema = new Schema({
    nombre: {type: String, required: true},
    digital: {type: String, required: true},
    reunion: {type: Schema.Types.ObjectId, ref: Reunion, required: true},
    tipo: {type: String, required: true}
})

module.exports = model('Recurso', recursoSchema);