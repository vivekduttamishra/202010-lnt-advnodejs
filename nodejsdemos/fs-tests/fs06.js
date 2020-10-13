let fs =require('fs');

require('../lib/utils');



let path='./testfile1.dat';





//reading the content asynchronously
fs.readFile(path, (err,data)=>{

    if(!err){        
        console.log('typeof(data)',data.getType());
        console.log('data.length',data.length);
        
        console.log('\n----------------------');
        process.stdout.write(data.toString());//.toLocaleUpperCase());
        console.log('\n----------------------');

    } else {
        console.log('error',err.message);

    }
});

console.log('wait while we read ',path,'...');

   


    






