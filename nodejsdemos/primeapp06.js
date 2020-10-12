
let {findPrimes} =require('./lib/primeutils3');


//Presentation Layer
const testFindPrimes= function(min,max){
    let start=new Date();
    console.log(`finding primes in range ${min}-${max} at ${start.toLocaleTimeString()}`);
    findPrimes(min,max,(err,primes)=>{
        let end=new Date();
        console.log(`Total time taken is ${end-start}`);
        if(err)
            console.log('error',err.message);
        else
            console.log(`total primes between ${min}-${max} is ${primes.length}`);
    });

}



testFindPrimes(2,50000); //this is a long time taking operation!
testFindPrimes(100,2);    //this call has potential to finish very quickly
testFindPrimes(2,10000);  //but must wait till previous operation has finished





