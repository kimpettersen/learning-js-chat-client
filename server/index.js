'use strict';

var express = require('express'),
path = require('path'),
morgan  = require('morgan'),
bodyParser = require('body-parser'),
app = express(),
http = require('http').Server(app),
io = require('socket.io')(http),
port = 3000;


app.use(express.static(__dirname + '/../app'));
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/signin', function(req, res) {
  res.json(req.body);
});

app.get('*', function(req, res) {
  console.log('sddsf')
  var p = path.resolve(__dirname +  '/../app/index.html');
  res.sendFile(p);
});

io.on('connection', function(socket){
  socket.on('broadcast', function(message) {
    socket.broadcast(message);
    socket.emit(message);
  })
});




console.log('Dev-server started on port: ', port);
http.listen(port);
