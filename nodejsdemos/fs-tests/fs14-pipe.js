
let fs =require('fs');
require('../lib/utils');

let srcPath='./testfile1.dat';
let trgtPath='./testfile-pipe.dat';

let readStream= fs.createReadStream(srcPath);


//stdout is a WritableStream
readStream.pipe(process.stdout)
console.log('displaying the file')
console.log('------\n\n\n');
