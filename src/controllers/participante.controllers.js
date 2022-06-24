const Participante = require('../models/participante');
const participanteCtl = {};

participanteCtl.createParticipante = async (req, res)=>{
    const newParticipante = new Participante(req.body);
    await newParticipante.save();
    res.send({message: 'Participante created.'});
};

participanteCtl.getParticipantes = async (req, res)=>{
    const participantes = await Participante.find();
    res.json(participantes);
};

participanteCtl.getParticipante = async (req, res)=>{
    const participante = await Participante.findById(req.params.id);
    res.send(participante);
};

participanteCtl.updateParticipante = async (req, res)=>{
    await Participante.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Participante updated.'});
};

participanteCtl.deleteParticipante = async (req, res)=>{
    await Participante.findByIdAndDelete(req.params.id);
    res.json({status: 'Participante deleted.'});
};

module.exports = participanteCtl;