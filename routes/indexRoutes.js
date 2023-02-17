const { Router } = require('express');
const router = Router();
const { index,
        cargadores,
        auriculares } = require('../controllers/index.controller');

//routes

router.get('/', index);

router.get('/index', index); 

router.get('/cargadores', cargadores);

router.get('/auriculares', auriculares);

module.exports = router;
