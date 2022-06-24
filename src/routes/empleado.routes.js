const {Router} = require('express');
const router = Router();
const empleadoCtl = require('../controllers/empleado.controllers');

router.get('/', empleadoCtl.getEmpleados);
router.post('/', empleadoCtl.createEmpleado);
router.post('/login', empleadoCtl.loginUsuario);

module.exports = router;