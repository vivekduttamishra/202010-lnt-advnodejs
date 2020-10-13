
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
        return false;
    let result=[];
    for(let i=min;i<max;i++){
        if(i<2)
            continue;
        for(var j=2;j<i;j++)
            if(i%j==0)
                break;
        if(i==j) //its a prime number
            result.push(i);        
    }

    return result;    
    
}

console.log('findPrimes(2,100)',findPrimes(2,100));
console.log('findPrimes(2,10)',findPrimes(2,10));


console.log('findPrimes(10,2)',findPrimes(10,2));








