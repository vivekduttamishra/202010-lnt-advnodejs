
let {factorial} =require('./lib/math');


function testFactorial(n){
    let start=new Date();
    function printTimeTaken(){
        let end=new Date();
        console.log(`Total Time taken is ${end-start}`);
    }

    factorial(n)
        .then(f=>{
            console.log('factorial is ',f);
            printTimeTaken();
        })
        .catch(e=>{
            console.log(e);
            printTimeTaken();
        });

}


testFactorial(7);
testFactorial(-2);
testFactorial(5);





