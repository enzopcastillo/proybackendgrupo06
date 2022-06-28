const TipoReunion = require('../models/tipoReunion');
const tipoReunionCtl = {};

tipoReunionCtl.createTipoReunion = async (req, res)=>{
    const newTipoReunion = new TipoReunion(req.body);
    await newTipoReunion.save();
    res.send({message: 'TipoReunion created.'});
};

tipoReunionCtl.getTipoReuniones = async (req, res)=>{
    const tipoReuniones = await TipoReunion.find();
    res.json(tipoReuniones);
};

tipoReunionCtl.getTipoReunion = async (req, res)=>{
    const tipoReunion = await TipoReunion.findById(req.params.id);
    res.send(tipoReunion);
};

tipoReunionCtl.updateTipoReunion = async (req, res)=>{
    await TipoReunion.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'TipoReunion updated.'});
};

tipoReunionCtl.deleteTipoReunion = async (req, res)=>{
    await TipoReunion.findByIdAndDelete(req.params.id);
    res.json({status: 'TipoReunion deleted.'});
};

module.exports = tipoReunionCtl;