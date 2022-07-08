const {Router} = require('express');
const router = Router();
const reunionCtl = require('../controllers/reunion.controllers');

router.post('/', reunionCtl.createReunion);
router.get('/', reunionCtl.getReuniones);
<<<<<<< HEAD
router.get('/oficina/:id', reunionCtl.getReunionesOficina);
router.get('/empleado/:id', reunionCtl.getReunionesEmpleado);
=======
router.get('/oficina/:id', reunionCtl.getReunionesPorOficinas);
router.get('/empleado/:id', reunionCtl.getReunionesPorParticipantes);
>>>>>>> 77337bb11b4a423449ea75a3d64a6d8b280aad48
router.get('/:id', reunionCtl.getReunion);
router.put('/:id', reunionCtl.updateReunion);
router.delete('/:id', reunionCtl.deleteReunion);

module.exports = router;
