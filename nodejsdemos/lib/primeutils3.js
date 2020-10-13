

function isPrimeSync(number) {

    if (number < 2)
        return false;

    for (let i = 2; i < number; i++)
        if (number % i == 0)
            return false;

    return true;

}

function findPrimesSync(min, max) {
    //what to do with invalid argument
    if (max <= min)
        throw new Error(`invalid range [${min}-${max}]`);
    let result = [];
    for (let i = min; i < max; i++) {
        if (isPrimeSync(i))
            result.push(i);
    }

    return result;

}

function isPrime(number, cb) {
    cb(null, isPrimeSync(number));
}

//a private function not meant to be exported
//expected to be used for a small range only
function _findPrimesSync(min, max) {
    let results = [];
    for (let i = min; i < max; i++)
        if (isPrimeSync(i))
            results.push(i);

    return results;
}

function findPrimes(min, max, cb) {


    if (min >= max)
        cb(new Error(`Invalid Range(${min}-${max})`));  //result is undefined
    else {

        let lo = min;
        let hi = min + 1000; //find 1000 values in batch
        if (hi > max)  //if 1000 cross max count till only max only
            hi = max;

        let primes = []; //all primes that should be returned

        //let us now find primes in a small range (1000 or less) every 2ms

        let iid = setInterval(() => {

            let results = _findPrimesSync(lo, hi); //primes foound in one batch
            for (let value of results)
                primes.push(value); //add primes for one batch to all primes

            if (hi >= max) { //we have reached the end                    
                //lets stop the work by cancelling the interval
                clearInterval(iid);
                return cb(null, primes); //time to return the value
            }

            lo = hi;
            hi = hi + 1000;
            if (hi > max)
                hi = max;

        }, 2) //do this job every 2 ms

    }



}


function promisedPrimes(min, max) {

    //promise will return immediately
    return new Promise((resolve, reject) => {

        //but we must give client sometime to attach then/catch to the promise
        //start work after a moment.
        setTimeout(() => {
            if (min >= max)
                reject(`Invalid Range(${min}-${max})`);  //rejected with error message;
            else {

                let lo = min;
                let hi = min + 1000; //find 1000 values in batch
                if (hi > max)  //if 1000 cross max count till only max only
                    hi = max;

                let primes = []; //all primes that should be returned

                //let us now find primes in a small range (1000 or less) every 2ms

                let iid = setInterval(() => {

                    let results = _findPrimesSync(lo, hi); //primes foound in one batch
                    for (let value of results)
                        primes.push(value); //add primes for one batch to all primes

                    if (hi >= max) { //we have reached the end                    
                        //lets stop the work by cancelling the interval
                        clearInterval(iid);
                        return resolve(primes); //resolve the error!
                    }

                    lo = hi;
                    hi = hi + 1000;
                    if (hi > max)
                        hi = max;

                }, 2) //give client sometime to wireup the then/catch handler


            }

        }, 2); //just to simulate that job may take long time.



    });


}

function * primeRange(min,max){

    for(let i=min;i<max;i++)
        if(isPrimeSync(i)){
            //console.log('prime is ',i);            
            yield i;
        }

}

let EventEmitter = require('events');

function fetchPrimes(min,max,id){

    let event=new EventEmitter();
    let index=0;
    let gen=primeRange(min,max);
    let iid=setInterval(()=>{

        if(min>max){
            event.emit('ERROR', {id,min,max,message:'invalid range'})
            return clearInterval(iid);
        }
        x=gen.next();
        if(!x.done){
            index++;
            event.emit('PRIME',{id,index,min,max,prime:x.value});
        } else {
            event.emit('FINISHED',{id,min,max, totalPrimes: index});
            return clearInterval(iid); //clearInterval and return
        }

    },100);
    

    return event;
}




module.exports = {
    isPrimeSync,
    findPrimesSync,
    findPrimes,
    isPrime,
    promisedPrimes,
    primeRange,
    fetchPrimes
};


