const express = require ('express');
const router = require('./routes/usuario.routes');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

app.use(bodyParser.json())

const PORTA = 8000;

app.use(cors())
app.use(router)

app.listen(PORTA, () => console.log('rodando na '+ PORTA));