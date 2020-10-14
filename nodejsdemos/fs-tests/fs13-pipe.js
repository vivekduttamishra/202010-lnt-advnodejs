
let fs =require('fs');
require('../lib/utils');

let srcPath='./testfile2.dat';
let trgtPath='./testfile-pipe.dat';

let readStream= fs.createReadStream(srcPath);
let writeStream=fs.createWriteStream(trgtPath);


readStream
    .pipe(writeStream);

console.log('copying the file...');

//how do we know the file has been copied