const express = require('express');

const router = express.Router();

const gasto = require('../controllers/gastos.controllers');
const usuario = require('../controllers/usuarios.controllers');

router.get('/misitio', (req,res)=>{
    res.send('Bienvenido Backend Calculo de Gastos');
});

router.get('/misitio/about',(req,res)=>{
    res.send('<h1>Acerca de Nosotros</h1>');
});

// RUTAS GASTOS
router.get('/misitio/gastos', gasto.getGastos);

router.post('/misitio/gastos', gasto.addGasto);

router.get('/misitio/gastos/tipo/:tipo', gasto.getGastosTipo);

router.get('/misitio/gastos/:id', gasto.getGasto);

router.put('/misitio/gastos/:id', gasto.editGasto);

router.delete('/misitio/gastos/:id', gasto.deleteGasto);

// RUTAS USUARIOS
router.get('/misitio/usuarios', usuario.getUsuarios);

router.post('/misitio/usuarios/:id', usuario.addUsuario);

router.put('/misitio/usuarios/:id', usuario.editUsuario);

router.delete('/misitio/usuarios/:id', usuario.deleteUsuario);

// RUTA CALCULOS
router.post('/misitio/calculos',(req,res)=>{
    console.log(req.body);
    res.send("Calculo impuesto a la renta");
});

// ERROR 404
router.use((req,res)=>{
    res.status(404).send('No se encontro la pagina');
});

module.exports = router;