var {exec} = require('child_process');



var child = exec('dir /w', function(err, stdout, stderr) {
    if (err) {
        console.log('Error: ' + stderr);
    } else {
        console.log('Output is: ' + stdout.toUpperCase());
    }
});

console.log("PID is " + child.pid);