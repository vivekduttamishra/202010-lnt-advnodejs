let primes=require('../lib/primeutils3');


class PrimeService{
    constructor(){
        this.requests=new Map();
        this.requestCount=0;
    }

     submitPrimeRequest(min,max, cb){

        min=parseInt(min);
        max=parseInt(max);
        
        this.requestCount++;
        let id=this.requestCount;
        let e= primes.fetchPrimes(min,max,id);
        this.requests[id]=e;
        return e;
    }
}

module.exports=new PrimeService();

