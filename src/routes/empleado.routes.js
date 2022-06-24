const {Router} = require('express');
const router = Router();
const empleadoCtl = require('../controllers/empleado.controllers');

router.post('/', empleadoCtl.createEmpleado);
router.post('/login', empleadoCtl.loginEmpleado);
router.get('/', empleadoCtl.getEmpleados);
router.get('/:id', empleadoCtl.getEmpleado);
router.put('/:id', empleadoCtl.updateEmpleado);
router.delete('/:id', empleadoCtl.deleteEmpleado);

module.exports = router;