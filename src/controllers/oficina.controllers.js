const Oficina = require('../models/oficina');
const oficinaCtl = {};

oficinaCtl.createOficina = async (req, res)=>{
    const newOficina = new Oficina(req.body);
    await newOficina.save();
    res.send({message: 'Oficina created.'});
};

oficinaCtl.getOficinas = async (req, res)=>{
    const oficinas = await Oficina.find();
    res.json(oficinas);
};

oficinaCtl.getOficina = async (req, res)=>{
    const oficina = await Oficina.findById(req.params.id);
    res.send(oficina);
};

oficinaCtl.updateOficina = async (req, res)=>{
    await Oficina.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Oficina updated.'});
};

oficinaCtl.deleteOficina = async (req, res)=>{
    await Oficina.findByIdAndDelete(req.params.id);
    res.json({status: 'Oficina deleted.'});
};

module.exports = oficinaCtl;