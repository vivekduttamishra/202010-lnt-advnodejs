
let {findPrimes} =require('./lib/primeutils');


//Presentation Layer
const testFindPrime=function(min,max){
    let start=new Date();
    try{

        console.log(`finding primes between ${min}-${max} at ${start.toLocaleTimeString()}`);

        let primes=findPrimesSync(min,max);
        console.log('total primes is ', primes.length);
    } catch(err){
        console.log('error',err.message);
    } finally{
        console.log(`total time taken is ${new Date()-start}`);
    }
}




console.log('findPrimes(2,100)',findPrimes(2,100));
console.log('findPrimes(2,10)',findPrimes(2,10));
try{
    console.log('findPrimes(10,2)',findPrimes(10,2));
}catch(err){
    console.log('error',err.message);
}








