const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const cr = require('./controller')

const app = express();
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)
    .then(db => {app.set('db', db)})

app.get('/api/inventory', cr.getAll)





const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {console.log(`Server listening on port ${port}`)})