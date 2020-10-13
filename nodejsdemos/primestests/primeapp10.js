

let {fetchPrimes} =require('../lib/primeutils3');


function onError(err){
    console.log(`Error with job#${err.id}:${err.message}`);
}

function onPrime(info){
    console.log(info);
}

function onFinish(info){
    console.log(`task#${info.id} counted ${info.totalPrimes} between ${info.min}-${info.max}`);
}

let tasks=0;
async function testFetchPrimes(min,max){

    let id=tasks++;
    fetchPrimes(min,max,id)
        .on('ERROR', onError)
        .on('PRIME',onPrime)
        .on('FINISHED', onFinish);

    //await sleep(2000);
    //abort()

}

testFetchPrimes(2,50);
testFetchPrimes(50,100);
testFetchPrimes(75,125);

