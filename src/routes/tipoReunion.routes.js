const {Router} = require('express');
const router = Router();
const tipoReunionCtl = require('../controllers/tipoReunion.controllers');

router.post('/', tipoReunionCtl.createTipoReunion);
router.get('/', tipoReunionCtl.getTipoReuniones);
router.get('/:id', tipoReunionCtl.getTipoReunion);
router.put('/:id', tipoReunionCtl.updateTipoReunion);
router.delete('/:id', tipoReunionCtl.deleteTipoReunion); 

module.exports = router;