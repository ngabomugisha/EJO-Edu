const express = require('express');
const db = require('./config/db').default;
var bodyParser = require('body-parser')
const cors = require("cors");
const parentDirectory = __dirname;
const path = require("path");

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/uploads/public-files", express.static(path.join(parentDirectory, "uploads", "public-files")));

app.use(bodyParser.json());

app.use(cors({origin: "*"}));
db();

app.use('/', require('./router'));
const PORT = process.env.PORT || 9000

app.listen(PORT, console.log(`Listening on ${PORT}`))