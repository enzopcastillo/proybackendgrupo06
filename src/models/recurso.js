const {Schema, model} = require('mongoose'); 

const recursoSchema = new Schema({
    nombre: {type: String, required: true},
    archivoUrl: {type: String, required: true},
    tipo: {type: String, required: true}
})

module.exports = model('Recurso', recursoSchema);