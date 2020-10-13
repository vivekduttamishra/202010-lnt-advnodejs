
let fs=require('fs');

function mkdir(path, options={}){

    return new Promise((resolve,reject)=>{
        fs.mkdir(path,(err)=>{
            if(err)
                reject(err);
            else
                resolve(path);
        })
    });
}

module.exports={
    mkdir
}