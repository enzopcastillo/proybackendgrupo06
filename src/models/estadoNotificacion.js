const {Schema, model} = require('mongoose');

const estadoNotificacionSchema = new Schema({
    nombre: {type: String, required: true} 
})

module.exports = model('EstadoNotificacion', estadoNotificacionSchema);