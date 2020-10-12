

let factorial=(number)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            if(number<0)
                reject('negative numbers do not have factorial');

            let f=1;

            while(number>0)
                f*=number--;

            resolve(f);

        }, (number>0?number:1)*100);

    });
};


let _combination=(n,r)=>{

    //factorial(n)/factorial(n-r)/factorial(r)

    return new Promise((resolve,reject)=>{

        factorial(n)
        .then(fn=>{
            factorial(n-r)
                .then(fn_r=>{
                    factorial(r)
                        .then(fr=>{
                            let result= fn/fn_r/fr;
                            resolve(result);
                        }).catch(reject);
                }).catch(reject);
        }).catch(reject);

    });


}

async function combination(n,r){

    let fn= await factorial(n);
    let fn_r=await factorial(n-r);
    let fr=await factorial(r);
    let c= fn/fn_r/fr;  

    return c;

}




module.exports={
    factorial,
    combination
}