const Empleado = require('../models/empleado');
const empleadoCtl = {};
const jwt = require('jsonwebtoken');

empleadoCtl.createEmpleado = async (req, res)=>{
    const newEmpleado = new Empleado(req.body);
    await newEmpleado.save();
    res.send({message: 'Empleado created.'});
};

empleadoCtl.getEmpleados = async (req, res)=>{
    const empleados = await Empleado.find().populate('dependencia').populate('notificaciones');
    res.json(empleados);
};

empleadoCtl.getEmpleado = async (req, res)=>{
    const empleado = await Empleado.findById(req.params.id).populate('dependencia').populate('notificaciones');
    res.send(empleado);
};

empleadoCtl.updateEmpleado = async (req, res)=>{
    await Empleado.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Empleado updated.'});
};

empleadoCtl.deleteEmpleado = async (req, res)=>{
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({status: 'Empleado deleted.'});
};

empleadoCtl.loginEmpleado = async (req, res)=>{
    const criteria = {
        username: req.body.username,
        password: req.body.password
    }
    Empleado.findOne(criteria, function(err, user) {
        if (err) {
            res.json({
                status: 0,
                msg: 'error'})
        };
        if (!user) {
            res.json({
                status: 0,
                msg: "Empleado not found." })
        } else {
            const unToken = jwt.sign({id: user._id}, "secretkey")
            res.json({
                status: 1,
                msg: "You are successfully logged in.",
                username: user.username,
                perfil: user.perfil,
                userid: user._id,
                rol: user.rol,
                token: unToken
            })
        }
    })
};

module.exports = empleadoCtl;