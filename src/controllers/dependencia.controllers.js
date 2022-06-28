const Dependencia = require('../models/dependencia');
const dependenciaCtl = {};

dependenciaCtl.createDependencia = async (req, res)=>{
    const newDependencia = new Dependencia(req.body);
    await newDependencia.save();
    res.send({message: 'Dependencia created.'});
};

dependenciaCtl.getDependencias = async (req, res)=>{
    const dependencias = await Dependencia.find();
    res.json(dependencias);
};

dependenciaCtl.getDependencia = async (req, res)=>{
    const dependencia = await Dependencia.findById(req.params.id);
    res.send(dependencia);
};

dependenciaCtl.updateDependencia = async (req, res)=>{
    await Dependencia.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Dependencia updated.'});
};

dependenciaCtl.deleteDependencia = async (req, res)=>{
    await Dependencia.findByIdAndDelete(req.params.id);
    res.json({status: 'Dependencia deleted.'});
};

module.exports = dependenciaCtl;