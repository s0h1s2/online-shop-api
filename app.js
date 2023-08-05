// NOTE: i didn't implement password hashing due lack of time.
// NOTE: file uploading on own server is not a good approach it is best to upload files to somewhere else like aws s3

require("dotenv").config();
const express = require('express');
const logger = require('morgan');
const path = require("path");
const bodyParser = require("body-parser");
const routers = require('./routes/index');
const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads/")));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth");
    next();
});
app.use(function(req, res, next, err) {
    res.status(500).send({ error: "something is broken." });
})
app.use('/api/v1/', routers);
const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
