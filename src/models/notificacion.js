const {Schema, model} = require('mongoose'); 

const notificacionSchema = new Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    estado: {type: String, required: true},
    fecha: {type: String, required: true},
    fechaVencimiento: {type: String, required: true}
})

module.exports = model('Notificacion', notificacionSchema);

