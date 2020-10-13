
let {primeRange} =require('./lib/primeutils3');

let last=0;
let count=0
for(let prime of primeRange(2,100)){
    last=prime;
    count++;
    if(count==10)
        break;
}
    
console.log(`prime#${count} is ${last}`);
