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

function combination(n,r){
    let fn = factorial(n);
    let fn_r = factorial(n - r);
    let fr = factorial(r);
    var comb='waiting for the result...';    
    //This promise is a promise to calculate combination 
    //when factorial promises are fulfilled.
    return new Promise((resolve,reject)=>{
        return Promise.all([fn,fn_r,fr])  //when all promises are fulfilled (resolved/rejected)
            .then((result) => {
                
                //we will reach here in apporx 1400ms for comibination(7,2);
                comb = (result[0] / result[1] / result[2]);
                resolve(comb);               
            
            })
            // .catch(function(err){   //you must manually catch it
            //     reject(err);         //and re-reject it
            // });
    });
}
combination(-7, 2).then(console.log).catch(console.log);
console.log('waiting for the combination...');

//combination(7, -2).then(console.log).catch(console.log);