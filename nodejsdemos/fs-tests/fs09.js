let fs =require('fs');
require('../lib/utils');



let path='./testfile2.dat';

let {size}=fs.statSync(path);

let bytesRead=0;
let readCount;


let reader = fs.createReadStream(path);

//reader is an object of tyep readStream and has some weldefined event
//they are 

// data when we have deta to read
reader.on('data', data=>{
    let count=data.length;
    readCount++;
    bytesRead+=count;
    console.log(count);
});

// error when we encounter an error 
reader.on('error',console.log);

//end when we reach the end
reader.on('end',()=>console.log(`total ${bytesRead} bytes read in ${readCount} iteration`) );







 










