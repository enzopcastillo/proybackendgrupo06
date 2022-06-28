const {Router} = require('express');
const router = Router();
const recursoCtl = require('../controllers/recurso.controllers');

router.post('/', recursoCtl.createRecurso);
router.get('/', recursoCtl.getRecursos);
router.get('/:id', recursoCtl.getRecurso);
router.put('/:id', recursoCtl.updateRecurso);
router.delete('/:id', recursoCtl.deleteRecurso);

module.exports = router;