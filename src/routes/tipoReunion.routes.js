const {Router} = require('express');
const router = Router();
const tipoReunion = require('../controllers/tipoReunion.controllers');

router.post('/', tipoReunion.createTipoReunion);
router.get('/', tipoReunion.getTipoReuniones);
router.get('/:id', tipoReunion.getTipoReunion);
router.put('/:id', tipoReunion.updateTipoReunion);
router.delete('/:id', tipoReunion.deleteTipoReunion);

module.exports = router;