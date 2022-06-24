const {Schema, model} = require('mongoose');

const estadoReunionSchema = new Schema({
    nombre: {type: String, required: true}
})
 
module.exports = model('EstadoReunion', estadoReunionSchema);