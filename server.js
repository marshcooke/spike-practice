var express = require('express');
var path = require('path');
require('dotenv').config();
var app = express();
var port = process.env.PORT || 4424;


app.use(express.static('public'));





app.listen(port, function () {
    console.log('server running on port', port);
});