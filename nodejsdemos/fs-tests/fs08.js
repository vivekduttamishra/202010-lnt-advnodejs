let fs =require('fs');
require('../lib/utils');



let path='./testfile2.dat';


let reader = fs.createReadStream(path);

//reader is an object of tyep readStream and has some weldefined event
//they are 

// data when we have deta to read
reader.on('data', data=>{
    process.stdout.write(data);
});

// error when we encounter an error 
reader.on('error',console.log);

//end when we reach the end
reader.on('end',()=>console.log('\n---------end---------') );

console.log('----------- start -----------\n');






 










