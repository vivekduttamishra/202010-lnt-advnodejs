let fs =require('fs');
require('../lib/utils');

let path='./testfile2.dat';
let {size}=fs.statSync(path);

let bytesRead=0;
let readCount=0;
let nextProgress=10;


let reader = fs.createReadStream(path);




reader.on('data', data=>{
    let count=data.length;
    readCount++;
    bytesRead+=count;
    let pc= Math.floor(bytesRead/size*100);
    if(pc>=nextProgress){
        process.stdout.write("██ " );
        nextProgress+=10;
    }
    
});

// error when we encounter an error 
reader.on('error',console.log);

//end when we reach the end
reader.on('end',()=>{
    process.stdout.write(' 100%\n');
    console.log(`total ${bytesRead} bytes read in ${readCount} iteration`) ;   
});







 










