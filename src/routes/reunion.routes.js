const {Router} = require('express');
const router = Router();
const reunionCtl = require('../controllers/reunion.controllers');

router.post('/', reunionCtl.createReunion);
router.get('/', reunionCtl.getReuniones);
router.get('/oficina/:id', reunionCtl.getReunionesPorOficinas);
router.get('/empleado/:id', reunionCtl.getReunionesPorParticipantes);
router.get('/:id', reunionCtl.getReunion);
router.put('/:id', reunionCtl.updateReunion);
router.delete('/:id', reunionCtl.deleteReunion);

module.exports = router;
