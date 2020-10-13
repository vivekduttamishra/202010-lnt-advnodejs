
let _factorialV1=(number)=>{
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


let __factorialV2=(number)=>{
    return new Promise((resolve,reject)=>{

        let result=1;
        let x=number;

        let iid=setInterval(()=>{

            if(x>1)
                result*=x--;
            else{
                if(x>=0)
                    resolve(result);
                else
                    reject(`negative numbers don't have factorial: ${number}`);

                clearInterval(iid);
                    
            }          

        }, 100);

    });
};

let utils=require('./utils');


async function factorial(number){

        await utils.sleep(100);
        if(number<0)
            throw `negative numbers don't have factorial ${number}`; //rejection
        let factorial=1;

        while(number>1){
            await utils.sleep(100);  //called at an interval of 100ms
            factorial*=number--;
        }

        return factorial; //resolve

}



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

async function __combinationV2(n,r){

    let fn= await factorial(n);
    let fn_r=await factorial(n-r);
    let fr=await factorial(r);
    let c= fn/fn_r/fr;  

    return c;

}


async function combination(n,r){

    let fn= factorial(n);
    let fn_r= factorial(n-r);
    let fr= factorial(r);

    let results= await Promise.all([fn,fn_r,fr]);

    let c= results[0]/results[1]/results[2];  

    return c;

}


module.exports={
    factorial,
    combination
}