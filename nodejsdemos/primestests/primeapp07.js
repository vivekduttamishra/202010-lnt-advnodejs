
let {promisedPrimes} =require('../lib/primeutils3');


//Presentation Layer
const testPromisedPrimes= function(min,max){
    let start=new Date();
    console.log(`finding primes in range ${min}-${max} at ${start.toLocaleTimeString()}`);

    promisedPrimes(min,max)
        .then(primes=>{
            console.log('total primes',primes.length);
            let end=new Date();
            console.log(`Total time taken to find primes in range (${min}-${max}) is ${end-start}`);
        })
        .catch(error=>{
            console.log('error', error);
            let end=new Date();
            console.log(`Total time taken to find primes in range (${min}-${max}) is ${end-start}`);
            console.log();
        });

}



testPromisedPrimes(2,50000); //this is a long time taking operation!
testPromisedPrimes(100,2);    //this call has potential to finish very quickly
testPromisedPrimes(2,10000);  //but must wait till previous operation has finished





