const {Router} = require('express');
const router = Router();
const notificacionCtl = require('../controllers/notificacion.controllers');

router.post('/', notificacionCtl.createNotificacion);
router.get('/', notificacionCtl.getNotificaciones);
router.get('/:id', notificacionCtl.getNotificacion);
router.put('/:id', notificacionCtl.updateNotificacion);
router.delete('/:id', notificacionCtl.deleteNotificacion);

module.exports = router;