const {Router} = require('express');
const router = Router();
const notificacion = require('../controllers/notificacion.controllers');

router.post('/', notificacion.createNotificacion);
router.get('/', notificacion.getNotificaciones);
router.get('/:id', notificacion.getNotificacion);
router.put('/:id', notificacion.updateNotificacion);
router.delete('/:id', notificacion.deleteNotificacion);

module.exports = router;