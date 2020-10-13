function factorial(n){
    return new Promise(function(resolve,reject){
        if (n < 0) {
            reject(`Cannot get the factorial for a negative number ${n}`)
        } else {
            let fn = 1;
            while (n > 1)
            fn *= n--;
            resolve(fn);
        }
    });
} 

async function combination(n,r){

    // try{
        
        let fn = factorial(n);
        let fn_r = factorial(n - r);
        let fr = factorial(r);
        var comb='waiting for the result...';

        let result=await    Promise.all([fn,fn_r,fr]);   
        
        //any exception is autmatically wrapped in reject()
        comb=  comb = (result[0] / result[1] / result[2]);

        return comb; // internally resolve(comb)

    // } catch(err){
    //     console.log('err',err);        
    // }
          
    
}

combination(-7, 2).then(console.log).catch(console.log);

console.log('waiting for the combination...');

//combination(7, -2).then(console.log).catch(console.log);