'use strict'
var express = require('express');
var app = express();
var http = require('http');
var date = new Date;

app.get('/', function(req, res){
  res.send("The time is " + date);
});

app.get('/:name', function(req, res) {
  res.send({'msg': 'hello ' + req.params.name + '!'});
});

app.use(express.static(__dirname + '/static'));

var server = http.createServer(app);

server.listen(3000, function() {
  console.log("Server is listening on port 3000");
});