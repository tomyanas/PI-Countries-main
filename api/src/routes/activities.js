const { Router } = require('express');
const {createActivity, getActivites, getActById} = require('../controller/Activity')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



router.post('/activity', createActivity)
router.get('/', getActivites)
router.get('/:id', getActById)


module.exports = router;