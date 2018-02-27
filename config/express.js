var express = require('express');
var app = express();

//configurações do express

app.use(express.static('./public')); //aplicação de middleware static
module.exports = app;