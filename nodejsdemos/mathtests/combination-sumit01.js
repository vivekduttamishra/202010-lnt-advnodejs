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
    
    Promise.all([fn,fn_r,fr])  //when all promises are fulfilled (resolved/rejected)
        .then((result) => {
            //result[0] is output of promise fn
            console.log(result[0], result[1], result[2]);

            //we will reach here in apporx 1400ms for comibination(7,2);
            comb = (result[0] / result[1] / result[2]);
        
    })
    .catch(function(err){
        reject("combination Error: " + err);
    });

    //we reach here immediately without waiting for promise to be fulfilled.
    console.log("Calculate Factorial: " + comb);
   
    

}
combination(7, 2);