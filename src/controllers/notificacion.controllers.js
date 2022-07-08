const Notificacion = require('../models/notificacion');
const notificacionCtl = {};

notificacionCtl.createNotificacion = async (req, res)=>{
    const newNotificacion = new Notificacion(req.body);
    await newNotificacion.save();
    res.send({message: 'Notificacion created.'});
};

notificacionCtl.getNotificaciones = async (req, res)=>{
    const notificaciones = await Notificacion.find();
    res.json(notificaciones);
};

notificacionCtl.getNotificacion = async (req, res)=>{
    const notificacion = await Notificacion.findById(req.params.id);
    res.send(notificacion);
};

notificacionCtl.updateNotificacion = async (req, res)=>{
    await Notificacion.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Notificacion updated.'});
    res.json({result: 'creasdo'})
};

notificacionCtl.deleteNotificacion = async (req, res)=>{
    await Notificacion.findByIdAndDelete(req.params.id);
    res.json({status: 'Notificacion deleted.'});
};

module.exports = notificacionCtl;