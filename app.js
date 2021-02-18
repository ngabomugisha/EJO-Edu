const express = require('express');
const db = require('./config/db').default;
var bodyParser = require('body-parser')
const cors = require("cors");

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(cors({origin: "*"}));
db();

app.use('/', require('./router'));
const PORT = process.env.PORT || 9000

app.listen(PORT, console.log(`am listen on ${PORT}`))