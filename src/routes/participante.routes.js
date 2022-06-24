const {Router} = require('express');
const router = Router();
const participanteCtl = require('../controllers/participante.controllers');

router.post('/', participanteCtl.createParticipante);
router.get('/', participanteCtl.getParticipantes);
router.get('/:id', participanteCtl.getParticipante);
router.put('/:id', participanteCtl.updateParticipante);
router.delete('/:id', participanteCtl.deleteParticipante);

module.exports = router;