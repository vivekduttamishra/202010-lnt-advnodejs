

function getResult(){
    return 1;
    return 2;
    return 3;
}

let result1=getResult();
console.log(result1);
console.log('getResult()',getResult());
console.log('getResult()',getResult());


console.log('testing yield...');
function *getValues(){
    yield 1;
    yield 2;
    yield 3;
}

let x=getValues();  //returns a generator


console.log('using while loop...');
console.log('x',x);   
let n= x.next();
while(!n.done){
    console.log(n.value);
    n=x.next(); 
}

console.log('using for-of loop...');

for(let value of getValues()){  //automatically handles generator
    console.log(value);
}
