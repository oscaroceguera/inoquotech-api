const express = require('express')
const bodyParser = require('body-parser')
const app = express()

global.config = require('./config/config')

const db = require('./config/db')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Inoquotech API'))

require('./routes')(app)

const port = process.env.PORT || global.config.server.port

app.listen(port, () => {
  console.log(`${global.config.server.host}/${port}`);
})
