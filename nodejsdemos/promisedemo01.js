

function divide(x,y){

    return new Promise((resolve,reject)=>{
        if (y==0)
            reject('division by zero');
        else
            resolve(x/y);
    });

}

let p1= divide(10,2);
let p2= divide(10,0);



//what if the promise is resolved/rejected even befor you write a then/catch


setTimeout(function(){

    console.log('wiring the promises');
    p1.then(console.log);
    p2.catch(console.log);

},10)


