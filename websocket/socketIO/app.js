const app = require('express')();
const http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/test', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3030, function () {
  console.log('server start at 3030 port');
});
