const {Schema, model} = require('mongoose'); 

const tipoReunionSchema = new Schema({
    estado: {type: String, required: true},
    descripcion: {type: String, required: true}
})

module.exports = model('TipoReunion', tipoReunionSchema);