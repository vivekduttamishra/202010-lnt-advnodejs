
let fs =require('fs');
require('../lib/utils');

let srcPath='./testfile2.dat';
let trgtPath='./testfile-target.dat';

let readStream= fs.createReadStream(srcPath);
let writeStream=fs.createWriteStream(trgtPath);


let bytesRead=0;
let readCount=0;
let writeCount=0;
let firstTime=true;
let unsavedData='';
let readOver=false;

let writerReady=true; //writer can consume the data


readStream   
    .on('end',()=>{
        readStream.close();
        readOver=true; 
        console.log('file copied successfully');
        console.log(`Total ${bytesRead} written in ${readCount} cycles`);
    })
    .on('error',error=>{
        console.log('error',error);
    })
    .on('data',buffer=>{
        //we have read one chunk of data from the stream
        bytesRead+=buffer.length;
        readCount++;
        unsavedData+=buffer.toString();

        if(writerReady){
            writeStream.write(unsavedData); //this will happen later.  
            writerReady=false; //writer may not be ready here 
            readStream.pause(); //let me not read further.
            unsavedData='';   //let us empty out the buffer                 
        }
        
        
    })

writeStream
    .on('drain',data=>{                
        if(readOver){
            console.log('closing the target file...');
            writeStream.close(); //let us clsoe the writer
        }else{
            writerReady=true; //ok we have consumed previous data
            readStream.resume(); //reader you can read knew data now.
            //unsavedData='';
            process.stdout.write('+ ' ); //we have made some progress.
        }

    })
    .on('close',()=>{
        console.log('file copied successfully');
        console.log(`Total ${bytesRead} written in ${readCount} cycles`);
    })
    .on('error',error=>{
        console.log('error',error);
    })

console.log(`copying ${srcPath} to ${trgtPath}...`);




