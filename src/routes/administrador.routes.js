const {Router} = require('express');
const router = Router();
const administradorCtl = require('../controllers/administrador.controllers');

router.post('/', administradorCtl.createAdministrador);
router.get('/', administradorCtl.getAdministrador);
router.get('/:id', administradorCtl.getAdministrador);
router.put('/:id', administradorCtl.updateAdministrador);
router.delete('/:id', administradorCtl.deleteAdministrador);

module.exports = router;