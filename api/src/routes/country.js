const { Router } = require('express');
const {obtenerCountries , obtenerPorId } = require('../controller/Countries');
const router = Router();

router.get('/', obtenerCountries );
router.get('/:id', obtenerPorId );
/* router.get('/country', obtenerPorName ) */


module.exports = router;