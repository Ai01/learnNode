const net = require('net');

const HOST = '127.0.0.1';
const PORT = 8004;

const server = net.createServer();

server.listen({
  host: HOST,
  port: PORT
},()=>{
  console.log(`net server start on http://${HOST}:${PORT}`);
});

server.on('close', () => {
  console.log('close');
});

server.on('connection', (connection) => {
  console.log('connection');
  let _data = '';
  connection.on('data', (buffer)=>{
    _data += buffer;
  });
  connection.on('end', ()=>{
    console.log(_data);
  });

});

server.on('error', (err) => {
  console.log('error', err);
});

server.on('listening', () => {
  console.log('listening');
});


console.log(server.address());
