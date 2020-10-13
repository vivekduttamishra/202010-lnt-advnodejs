let fs =require('fs');

require('../lib/utils');


let path='./testfile2.dat';


 
// console.log('size',size);

//let stats=fs.statSync(path);
//console.log(stats);

//let size=fs.statSync(path).size;  
//ES2015 extraction operator allows you to extract selected properties from object
//extract two fields from right side in this way:
// assign stats.size to a variable called size and
//assign stats.ctime to a variable called date_created
let {size,ctime:date_created} = fs.statSync(path);   

console.log('size',size);
console.log('date_created',date_created);










