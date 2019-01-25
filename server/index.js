const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const cr = require('./controller')

const app = express();
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)
    .then(db => {app.set('db', db)})





const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Server listening on port ${port}`)})