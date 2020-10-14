
let fs =require('fs');
require('../lib/utils');

let srcPath='./testfile2.dat';
let trgtPath='./testfile-pipe.dat';

let readStream= fs.createReadStream(srcPath);
let writeStream=fs.createWriteStream(trgtPath);



readStream
    .pipe(writeStream)
    .on('finish', ()=>{
        console.log('filed copied successfully');
    })

//even after pipe your original streams and their events are available to you.
readStream.on('data',buffer=>{
    process.stdout.write('-');
});

writeStream.on('drain',()=>{
    process.stdout.write('_');
})

console.log('copying the file...');

//how do we know the file has been copied