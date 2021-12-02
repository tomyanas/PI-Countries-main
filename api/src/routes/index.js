/*
Modularizamos las rutas y luego acá las ponemos como middleware y después lo llevamos al app.js
*/

const { Router } = require('express');
const activitiesRoute = require('./activities.js');
const countryRoute = require('./country');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Nos traemos nuestras rutas para usarlas como middleware en /api/activity por ejemplo
router.use('/activities', activitiesRoute)
router.use('/country', countryRoute)


module.exports = router;
