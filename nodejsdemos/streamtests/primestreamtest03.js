let {PrimeStream} =require('../lib/primestream');
let {Converter} =require('../lib/transformstream');

let fs =require('fs');



let primeExtractor= (data)=>{
    let obj=JSON.parse(data); //{"index":131,"min":2,"max":1000,"prime":739}
    return obj.prime;
}

let file='./primes.txt';

let primes=new PrimeStream(2,1000);

primes
    .pipe(new Converter(primeExtractor))
    .pipe( new Converter(data=>data+"\n"))
   // .pipe(process.stdout)
    .pipe(fs.createWriteStream(file))
    .on('finish',()=>console.log('primes written to ',file));

primes.on('data',d=>process.stdout.write('.'));

console.log('please wait while we save the primes to ',file);




