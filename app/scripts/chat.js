
var Chat = (function($) {
  'use strict';

  var socket = io(),
      self = {};


  self.broadcastMessage = function(message) {
    // This method broadcasts a message to all connected users
    socket.io.emit('broadcast', message);
  };


  //Set up socket listeners
  socket.on('message', function(message) {
    // Listen for messages from the server.
    console.log(message);
  });

  $('#message-form').submit(function(e) {
    e.preventDefault();
    var message = {};

    // Task-1
    // <Your code here>

    self.broadcastMessage(message);
  });

  return self;

})($);