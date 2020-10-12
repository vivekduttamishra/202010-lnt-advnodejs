
let {combination} =require('./lib/math');


async function testComibination(n,r){
    let start=new Date();
    try{    
        let result=await combination(n,r);
        console.log(`comination is `,result);
    } catch(e){ 
        console.log('error',e);
    } finally{
        let end=new Date();
        console.log('total time taken is ', end-start);
    }

    //since exception is caught, there will be no rejection
    //A promise doesn't return
}


//can't await in global area
testComibination(5,2)
    .then(()=>console.log('calcualtion over'));







