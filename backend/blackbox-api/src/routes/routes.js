const router = require('express').Router();
const dividaController = require('../controller/divida.controller');

router.route('/listadividas/')
    .get(dividaController.listaDividas);
    
router.route('/cadastrodivida/')
    .post(dividaController.cadastroDivida);

router.route('/recuperadivida/')
    .post(dividaController.recuperaDivida);

router.route('/religar')
    .post(dividaController.religar);

router.route('/atualizaDivida')
    .post(dividaController.atualizarDivida);

module.exports = router;