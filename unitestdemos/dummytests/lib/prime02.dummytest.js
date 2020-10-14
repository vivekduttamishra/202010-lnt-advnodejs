let {isPrimeSync} =require('../../api/lib/prime');
let assert = require('assert');
const { AssertionError } = require('assert');


function testRunner(...testCases){

    let errors=[];
    let passCount=0;
    for(let test of testCases){

        try{
            test();
            passCount++;
            
        } catch(err){
            errors.push(err.message);
        }
    }


    if(errors.length===0)
        console.log('all test passed');
    else{
        console.log(`${errors.length} of ${testCases.length} test failed`);
        for(let error of errors){
            console.log(error)
        }
    }


}



function test29ShouldBePrime(){
    let result =  isPrimeSync(29);
    assert.equal(result, true, '29 should be prime');
    
}

function test21ShouldntBePrime(){
    let result2=isPrimeSync(21);
    assert.equal(result2, false, '21 shouldnt be prime');
    
}

function test2ShouldBePrime(){
    let result3=isPrimeSync(2);
    assert.equal(result3, true, '2 shouldnt be prime'); //wrong assertion
    
}


testRunner(test21ShouldntBePrime, test2ShouldBePrime, test29ShouldBePrime);





