const itemService = require('../service/usuario.service');


exports.insert = (req, res) => itemService.insert(res, req.body)
