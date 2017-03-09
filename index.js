const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

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
    origin: 'http://inoquotech.com'
  }
}

app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Inoquotech API'))

require('./routes')(app)

app.listen(port, () => {
  console.log(`${global.config.server.host}/${port}`);
})
