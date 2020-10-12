

//Business Logic Layer

function isPrime( number){ 

    if(number<2) 
        return false; 
    
    for(let i=2;i<number;i++) 
        if(number%i==0) 
            return false; 
    
    return true; 
    
} 

function findPrimes(min,max){    
    //what to do with invalid argument
    if(max<=min)
        throw new Error(`invalid range [${min}-${max}]`);
    let result=[];
    for(let i=min;i<max;i++){
      if(isPrime(i))
            result.push(i);        
    }

    return result;    
    
}



//Presentation Layer
console.log('findPrimes(2,100)',findPrimes(2,100));
console.log('findPrimes(2,10)',findPrimes(2,10));
try{
    console.log('findPrimes(10,2)',findPrimes(10,2));
}catch(err){
    console.log('error',err.message);
}








