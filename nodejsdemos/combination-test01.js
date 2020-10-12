
let {combination} =require('./lib/math');


function testComibination(n,r){
    let start=new Date();
    function printTimeTaken(){
        let end=new Date();
        console.log(`Total Time taken is ${end-start}`);
    }

    combination(n,r)
        .then(f=>{
            console.log('comibination is ',f);
            printTimeTaken();
        })
        .catch(e=>{
            console.log(e);
            printTimeTaken();
        });

}


testComibination(5,2);  // 5! / 3!  / 2! = 120/ 6 / 2 = 10







