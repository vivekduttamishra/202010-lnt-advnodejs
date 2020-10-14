let {PrimeStream} =require('../lib/primestream');
let fs =require('fs');



let stream=new PrimeStream(2,1000);

//stream.pipe(process.stdout);

let file='./primes.dat';

//write data directly to the file
stream.pipe(fs.createWriteStream(file)).on('finish',()=>console.log('primes saved to ',file));

console.log('please wait while we save your data');



