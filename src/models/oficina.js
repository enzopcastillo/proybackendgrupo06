const {Schema, model} = require('mongoose'); 
const Reuniones = require('./reunion');

const oficinaSchema = new Schema({
    nombre: {type: String, required: true},
    reuniones: [{type: Schema.Types.ObjectId, ref: Reuniones}],
<<<<<<< HEAD
    //numero: {type: Number, required: true},
    horarioApertura: {type: String, required: true},
    horarioCierre: {type: String, required: true},
    diasFuncionamiento: {type: String, required: true},
    piso: {type: Number, required: true},
=======
>>>>>>> 77337bb11b4a423449ea75a3d64a6d8b280aad48
    edificio: {type: String, required: true},
    piso: {type: Number, required: true},
    numero: {type: Number, required: true}
})

module.exports = model('Oficina', oficinaSchema);