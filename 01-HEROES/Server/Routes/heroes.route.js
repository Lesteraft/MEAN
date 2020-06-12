//Importar Express
const express = require('express');
//Inicializar las rutas
const router = express.Router();
//requerir modelo
const heroesController = require('../Controllers/heroes.controller.js');

//Ruta con dirección '/' responderá un JSON
router.get('/', heroesController.getHeroes);
router.post('/create', heroesController.createHero);
router.get('/show/:id', heroesController.getHero);
router.put('/edit/:id', heroesController.editHero);
router.delete('/delete/:id', heroesController.deleteHero);

//Exportar el módulo de rutas
module.exports = router;
