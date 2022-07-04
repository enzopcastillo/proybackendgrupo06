const {Schema, model} = require('mongoose'); 

const tipoReunionSchema = new Schema({
    nombre: {type: String, required: true}
})

module.exports = model('TipoReunion', tipoReunionSchema);