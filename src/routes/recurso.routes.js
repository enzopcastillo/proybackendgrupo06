const {Router} = require('express');
const router = Router();
const recurso = require('../controllers/recurso.controllers');

router.post('/', recurso.createRecurso);
router.get('/', recurso.getRecursos);
router.get('/:id', recurso.getRecurso);
router.put('/:id', recurso.updateRecurso);
router.delete('/:id', recurso.deleteRecurso);

module.exports = router;