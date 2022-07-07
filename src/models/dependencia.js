const {Schema, model} = require('mongoose');

const dependenciaSchema = new Schema({
    nombre: {type: String, required: true}, 
})

module.exports = model('Dependencia', dependenciaSchema);