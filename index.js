const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var cors = require('cors')

// TODO: CREATE_ADD Y UPDATE_AT PARA TODOS

global.config = require('./config/config')

const port = process.env.PORT || global.config.server.port

const db = require('./config/db')

var corsOptions

if (port === 3000) {
  corsOptions = {
    origin: 'http://localhost:8080'
  }
} else {
  corsOptions = {
    origin: 'http://mcfly.tecsiapp.com'
  }
}

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Inoquotech API'))

require('./routes')(app)

app.listen(port, () => {
  console.log(`${global.config.server.host}/${port}`);
})
