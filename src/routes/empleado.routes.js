const {Router} = require('express');
const router = Router();
const empleadoCtl = require('../controllers/empleado.controllers');
const authCtl = require('../controllers/auth.controllers');

router.post('/', authCtl.verifyToken, empleadoCtl.createEmpleado); // authCtl.verifyToken,
router.post('/login',authCtl.verifyToken, empleadoCtl.loginEmpleado);
router.get('/', authCtl.verifyToken, empleadoCtl.getEmpleados);
router.get('/:id',authCtl.verifyToken, empleadoCtl.getEmpleado);
router.put('/:id', authCtl.verifyToken, empleadoCtl.updateEmpleado);
router.delete('/:id',authCtl.verifyToken, empleadoCtl.deleteEmpleado);

module.exports = router;