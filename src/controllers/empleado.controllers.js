const Empleado = require('../models/empleado');
const empleadoCtl = {};

empleadoCtl.getEmpleados = async (req, res)=>{
    const empleados = await Empleado.find();
    res.json(empleados);
};

empleadoCtl.createEmpleado = async (req, res)=>{
    const newEmpleado = new Empleado(req.body);
    await newEmpleado.save();
    res.send({message: 'Empleado creado exitosamente.'});
};

/*
empleadoCtl.getEmpleado = async (req, res)=>{
    const libro = await Libro.findById(req.params.id);
    res.send(libro);
};

empleadoCtl.updateEmpleado = async (req, res)=>{
    await Pasaje.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Employee updated.'});
};

empleadoCtl.deleteEmpleado = async (req, res)=>{
    await Pasaje.findByIdAndDelete(req.params.id);
    res.json({status: 'Employee deleted.'});
};
*/


empleadoCtl.loginUsuario = async (req, res)=>{
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
                msg: "not found" })
        } else {
        res.json({
            status: 1,
            msg: "success",
            username: user.username, //retorno información útil para el frontend
            perfil: user.perfil, //retorno información útil para el frontend
            userid: user._id //retorno información útil para el frontend
        }
    })
};

module.exports = empleadoCtl;