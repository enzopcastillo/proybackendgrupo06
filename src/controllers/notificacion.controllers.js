const Notificacion = require('../models/notificacion');
const notificacion = {};

notificacion.createNotificacion = async (req, res)=>{
    const newNotificacion = new Notificacion(req.body);
    await newNotificacion.save();
    res.send({message: 'Notificacion created.'});
};

notificacion.getNotificaciones = async (req, res)=>{
    const notificaciones = await Notificacion.find();
    res.json(notificaciones);
};

notificacion.getNotificacion = async (req, res)=>{
    const notificacion = await Notificacion.findById(req.params.id);
    res.send(notificacion);
};

notificacion.updateNotificacion = async (req, res)=>{
    await Notificacion.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Notificacion updated.'});
};

notificacion.deleteNotificacion = async (req, res)=>{
    await Notificacion.findByIdAndDelete(req.params.id);
    res.json({status: 'Notificacion deleted.'});
};


module.exports = notificacion;