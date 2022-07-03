const {Router} = require('express');
const router = Router();
const reunionCtl = require('../controllers/reunion.controllers');

router.post('/', reunionCtl.createReunion);
router.get('/', reunionCtl.getReuniones);
router.get('/oficina/:id', reunionCtl.getReunionesOficina);
router.get('/empleado/:id', reunionCtl.getReunionesEmpleado);
router.get('/:id', reunionCtl.getReunion);
router.put('/:id', reunionCtl.updateReunion);
router.delete('/:id', reunionCtl.deleteReunion);

module.exports = router;