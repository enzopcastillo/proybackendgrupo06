const Administrador = require('../models/administrador');
const administradorCtl = {};

administradorCtl.createAdministrador = async (req, res)=>{
    const newAdministrador = new Administrador(req.body);
    await newAdministrador.save();
    res.send({message: 'Administrador created.'});
};

administradorCtl.getAdministradores = async (req, res)=>{
    const administradores = await Administrador.find();
    res.json(administradores);
};

administradorCtl.getAdministrador = async (req, res)=>{
    const administrador = await Administrador.findById(req.params.id);
    res.send(administrador);
};

administradorCtl.updateAdministrador = async (req, res)=>{
    await Administrador.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Administrador updated.'});
};

administradorCtl.deleteAdministrador = async (req, res)=>{
    await Administrador.findByIdAndDelete(req.params.id);
    res.json({status: 'Administrador deleted.'});
};

module.exports = administradorCtl;