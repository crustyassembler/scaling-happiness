var http = require("http");
var express = require("express");

var app = express();

app.use(function(req, res, next) {
  console.log('file requested: ' + req.originalUrl);
  next();
});

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
console.log("Listening on http:\/\/127.0.0.1:8080");
server.listen('8080', '127.0.0.1');
