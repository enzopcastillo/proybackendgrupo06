const EstadoNotificacion = require('./estadoReunion');
const {Schema, model} = require('mongoose'); 

const notificacionSchema = new Schema({
    estado: {type: Schema.Types.ObjectId, ref: EstadoNotificacion, required: true}
})

module.exports = model('Notificacion', notificacionSchema);

