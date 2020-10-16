var {fork} = require('child_process');

var child = fork(__dirname + '/prime.js');

child.on('message', function(m) {
    
    if(m.type=='prime'){
        console.log(`prime #${m.index}:${m.prime}`);
    }
    else if(m.type=='done'){
        console.log(`toal primes found is ${m.total}`);
    }
    
});  




child.send({cmd: 'findPrimes', min:2,max:100});

console.log(`child process id is ${child.pid}`);