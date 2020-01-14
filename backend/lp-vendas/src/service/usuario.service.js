const banco = require('../index.js');

module.exports.insert = (res, body) => {
    banco
        .insert(body)
        .into('usuarios')
        .then(data => res.send(data))
}