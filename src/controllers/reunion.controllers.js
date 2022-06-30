const Reunion = require('../models/reunion');
const reunionCtl = {};

reunionCtl.createReunion = async (req, res)=>{
    const newReunion = new Reunion(req.body);
    await newReunion.save();
    res.send({message: 'Reunion created.'});
};

reunionCtl.getReuniones = async (req, res)=>{
    const reuniones = await Reunion.find().populate('tipoReunion').populate('oficina');
    res.json(reuniones);
};

reunionCtl.getReunionesOficina = async (req, res)=>{
    /*criteria = {};
    if(req.query.oficina!=null && req.query.oficina!=""){
        criteria.oficina = { $regex: req.query.oficina, $options: "i" }};    
    const reuniones = await Reunion.find(criteria).populate('tipoReunion').populate('oficina');
    res.json(reuniones);
    */
    /*const reuniones = await Reunion.find({"oficina.nombre": "nombre1"}).populate('tipoReunion').populate('oficina');*/
    const reuniones = await Reunion.find({oficina:{_id:"62bb40ddfde8bd3ec266c924"}}).populate('tipoReunion').populate('oficina');
    res.json(reuniones);
};

reunionCtl.getReunion = async (req, res)=>{
    const reunion = await Reunion.findById(req.params.id).populate('tipoReunion').populate('oficina');
    res.send(reunion);
};

reunionCtl.updateReunion = async (req, res)=>{
    await Reunion.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Reunion updated.'});
};

reunionCtl.deleteReunion = async (req, res)=>{
    await Reunion.findByIdAndDelete(req.params.id);
    res.json({status: 'Reunion deleted.'});
};

module.exports = reunionCtl;