

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

console.log('x',x);   

console.log('x.next()',x.next()); //returns value: first yield, done: false suggests there may be more values

console.log('x.next()',x.next()); //returns value: second yield, done: false suggests there may be more values

console.log('x.next()',x.next()); //returns value: third yield, done: false suggests there may be more values

console.log('x.next()',x.next()); //returns value: undefined, done: true as we have gone past the last yield

console.log('x.next()',x.next()); //returns same as above as there is not change in the state. 
