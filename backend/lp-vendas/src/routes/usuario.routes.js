const rotas = require('express').Router();
const itemController = require('../controller/usuario.controller');

rotas.route('/cadastroUsuario')
    .post(itemController.insert);

module.exports = rotas;