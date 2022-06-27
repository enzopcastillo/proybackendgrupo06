const TipoReunion = require('../models/tipoReunion');
const tipoReunion = {};

tipoReunion.createTipoReunion = async (req, res)=>{
    const newTipoReunion = new TipoReunion(req.body);
    await newTipoReunion.save();
    res.send({message: 'TipoReunion created.'});
};

tipoReunion.getTipoReuniones = async (req, res)=>{
    const tipoReuniones = await TipoReunion.find();
    res.json(tipoReuniones);
};

tipoReunion.getTipoReunion = async (req, res)=>{
    const tipoReunion = await TipoReunion.findById(req.params.id);
    res.send(tipoReunion);
};

tipoReunion.updateTipoReunion = async (req, res)=>{
    await TipoReunion.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'TipoReunion updated.'});
};

tipoReunion.deleteTipoReunion = async (req, res)=>{
    await TipoReunion.findByIdAndDelete(req.params.id);
    res.json({status: 'TipoReunion deleted.'});
};


module.exports = tipoReunion;