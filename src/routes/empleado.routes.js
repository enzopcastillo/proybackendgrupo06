const {Router} = require('express');
const router = Router();
const empleadoCtl = require('../controllers/empleado.controllers');

router.get('/', empleadoCtl.getLibros);
router.post('/', empleadoCtl.createLibro);
router.post('/login', empleadoCtl.createLibro);

module.exports = router;