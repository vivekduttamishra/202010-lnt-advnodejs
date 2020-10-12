

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


module.exports={
    isPrimeSync,
    findPrimesSync
};


