const express = require('express');
const db = require('./config/db').default;
var bodyParser = require('body-parser')

const app = express()

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(bodyParser.json());
db();

app.use('/', require('./router'));
const PORT = process.env.PORT || 9000

app.listen(PORT, console.log(`am listen on ${PORT}`))