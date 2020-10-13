let fs =require('fs');


let folder='./temp';

fs.mkdir(folder, (err)=>{
    if(err)
        console.log('error',err.message);
    else
        console.log('created', folder);
});

//this line will be printed first
console.log('creating the directory'+folder+'...');
