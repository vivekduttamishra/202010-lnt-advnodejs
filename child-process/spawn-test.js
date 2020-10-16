// Sample inspired by http://nodejs.org/api/child_process.html

var {spawn} = require('child_process');
var fs=require('fs');


var dir=spawn('dir');

dir.stdout.pipe(fs.createWriteStream('dir.txt'));
