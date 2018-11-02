// const cluster = require('cluster');            // | | 
// const http = require('http');                  // | | 
// const numCPUs = require('os').cpus().length;   // | |    都执行了
//                                                // | | 
// if (cluster.isMaster) {                        // |-|-----------------
//   // Fork workers.                             //   | 
//   for (var i = 0; i < numCPUs; i++) {          //   | 
//     cluster.fork();                            //   | 
//   }                                            //   | 仅父进程执行 (a.js)
//   cluster.on('exit', (worker) => {             //   | 
//     console.log(`${worker.process.pid} died`); //   | 
//   });                                          //   |
// } else {                                       // |-------------------
//   // Workers can share any TCP connection      // | 
//   // In this case it is an HTTP server         // | 
//   http.createServer((req, res) => {            // | 
//     res.writeHead(200);                        // |   仅子进程执行 (b.js)
//     res.end('hello world\n');                  // | 
//   }).listen(8000);                             // | 
// }                                              // |-------------------
//                                                // | |
// console.log('hello'); 
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log("master start...");

    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('listening',function(worker,address){
        console.log('listening: worker ' + worker.process.pid +', Address: '+address.address+":"+address.port);
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end("hello world\n");
    }).listen(0);
}