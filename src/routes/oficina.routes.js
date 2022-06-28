const {Router} = require('express');
const router = Router();
const oficinaCtl = require('../controllers/oficina.controllers');

router.post('/', oficinaCtl.createOficina);
router.get('/', oficinaCtl.getOficinas);
router.get('/:id', oficinaCtl.getOficina);
router.put('/:id', oficinaCtl.updateOficina);
router.delete('/:id', oficinaCtl.deleteOficina);

module.exports = router;