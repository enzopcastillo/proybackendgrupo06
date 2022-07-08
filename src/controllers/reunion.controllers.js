const empleado = require('../models/empleado');
const recurso = require('../models/recurso');
const Reunion = require('../models/reunion');
const reunionCtl = {};

reunionCtl.createReunion = async (req, res)=>{
    const newReunion = new Reunion(req.body);
    await newReunion.save();
    res.send({message: 'Reunion created.'});
};

reunionCtl.getReuniones = async (req, res)=>{
    const reuniones = await Reunion.find().populate('tipoReunion').populate('oficina').populate([
        {
            path:'participantes',
            model:empleado,
            populate:{
                path:'dependencia'
            }
        },
        {
            path:'recursos',
            model: recurso
        }
    ]); 
    res.json(reuniones);
};

reunionCtl.getReunionesPorOficinas = async (req, res)=>{
    const reuniones = await Reunion.find({oficina:{_id: req.params.id}}).populate('tipoReunion').populate('oficina').populate([
        {
            path:'participantes',
            model:empleado,
            populate:{
                path:'dependencia'
            }
        },
        {
            path:'recursos',
            model: recurso
        }
    ]); ;
    res.json(reuniones);
};

reunionCtl.getReunionesPorParticipantes = async (req, res)=>{
    const busqueda= empleado._id;
    const reuniones = await Reunion.find({participantes:{ _id: req.params.id}}).populate('tipoReunion').populate('oficina').populate([
        {
            path:'participantes',
            model:empleado,
            populate:{
                path:'dependencia'
            }
        },
        {
            path:'recursos',
            model: recurso
        }
    ]); 
    res.json(reuniones);
};

reunionCtl.getReunion = async (req, res)=>{
    const reunion = await Reunion.findById(req.params.id).populate('tipoReunion').populate('oficina').populate([
        {
            path:'participantes',
            model:empleado,
            populate:{
                path:'dependencia'
            }
        },
        {
            path:'recursos',
            model: recurso
        }
    ]);
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
