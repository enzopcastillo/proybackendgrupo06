const Recurso = require('../models/recurso');
const recurso = {};


recurso.createRecurso = async (req, res)=>{
    const newRecurso = new Recurso(req.body);
    await newRecurso.save();
    res.send({message: 'Recurso created.'});
};

recurso.getRecursos = async (req, res)=>{
    const recursos = await Recurso.find();
    res.json(recursos);
};

recurso.getRecurso = async (req, res)=>{
    const recurso = await Recurso.findById(req.params.id);
    res.send(recurso);
};

recurso.updateRecurso = async (req, res)=>{
    await Recurso.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Recurso updated.'});
};

recurso.deleteRecurso = async (req, res)=>{
    await Recurso.findByIdAndDelete(req.params.id);
    res.json({status: 'Recurso deleted.'});
};


module.exports = recurso;