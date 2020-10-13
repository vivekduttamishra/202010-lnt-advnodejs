
let {findPrimesSync} =require('../lib/primeutils');


//Presentation Layer
const testFindPrimesSync= function(min,max){
    let start=new Date();
    try{

        console.log(`finding primes between ${min}-${max} at ${start.toLocaleTimeString()}`);

        let primes= findPrimesSync(min,max);
        console.log('total primes is ', primes.length);
    } catch(err){
        console.log('error',err.message);
    } finally{
        console.log(`total time taken is ${new Date()-start}`);
    }
}



testFindPrimesSync(2,500000); //this is a long time taking operation!
testFindPrimesSync(100,2);    //this call has potential to finish very quickly
testFindPrimesSync(2,10000);  //but must wait till previous operation has finished





