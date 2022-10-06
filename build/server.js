"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Express (instalar no terminal)
var express = require("express");
var port = 3000;
var app = express();
app.get('/', function (request, response) {
    response.send('Hello world!');
});
app.get('/participantes', function (request, response) {
    response.send('Hello participator!');
});
app.get('/instrutor', function (request, response) {
    response.send('Hello instructor!');
});
app.listen(port, function () {
    console.log(port, "Serve is running at por port ".concat(port));
});
