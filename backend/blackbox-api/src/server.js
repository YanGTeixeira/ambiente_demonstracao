const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes/routes')

const app = express()
let server

function main() {

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(morgan(process.env.MORGAN_LEVEL || 'dev'))
    app.use(cors())


    app.options('*', (req, res) => res.status(203).send({}));

    // rotas
    app.use(process.env.URL_API || '/api/v1', routes)

    const port = process.env.PORT_API || 8000
    server = app.listen(port, () => console.log(`App listening on port ${port}!`))
}

function shutdownServer() {
    console.log("Matando o processo")
    server.close()   
}

main()

module.exports = { main, shutdownServer }