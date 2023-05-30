const { Router } = require('express');
const routerMain = Router();
const routePokemon = require('./routePokemon')
const routeType = require('./routeType')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

routerMain.use('/pokemon', routePokemon)
routerMain.use('/type', routeType)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = routerMain;
