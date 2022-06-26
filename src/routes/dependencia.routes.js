const {Router} = require('express');
const router = Router();
const dependenciaCtl = require('../controllers/dependencia.controllers');

router.post('/', dependenciaCtl.createDependencia);
router.get('/', dependenciaCtl.getDependencias);
router.get('/:id', dependenciaCtl.getDependencia);
router.put('/:id', dependenciaCtl.updateDependencia);
router.delete('/:id', dependenciaCtl.deleteDependencia);

module.exports = router;