function isPrimeSync( number){ 

    if(number<2) 
        return false; 
    
    for(let i=2;i<number;i++) 
        if(number%i==0) 
            return false; 
    
    return true; 
    
} 

function findPrimesSync(min,max){    
    //what to do with invalid argument
    if(max<=min)
        throw new Error(`invalid range [${min}-${max}]`);
    let result=[];
    for(let i=min;i<max;i++){
      if(isPrimeSync(i))
            result.push(i);        
    }

    return result;    
    
}

function isPrime(number, cb){
     cb(null, isPrimeSync(number)); 
}

function findPrimes(min,max, cb){

    if(min>=max)
        cb(new Error(`Invalid Range(${min}-${max})`));  //result is undefined
    else{
        let primes=[];
        for(let i=min;i<max;i++)
            isPrime(i,  (err,result) => {
                if(result)
                    primes.push(i);
            });

        cb(null,primes); //first parameter null indicates success
    }
}




module.exports={
    isPrimeSync,
    findPrimesSync,
    findPrimes,
    isPrime
};

