var cluster = require('cluster');
var http=require('http');


if(cluster.isMaster) {
    var numWorkers = require('os').cpus().length;

    console.log('Master cluster setting up ' + numWorkers + ' workers...');

    for(var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }
    
    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork(); //create a replacement fork
    });

   
} 
else { //i am the forked job
    let requestCount=0;
    var requestHandler = function (request,response) {
        requestCount++;
        let message=`servied  by ${process.pid}: total requests ${requestCount}`
        response.end(message);
        console.log(message);
    }

    http.createServer(requestHandler)
    .listen(8000, function() {
        console.log('Process ' + process.pid + ' is listening to all incoming requests');
    });
}