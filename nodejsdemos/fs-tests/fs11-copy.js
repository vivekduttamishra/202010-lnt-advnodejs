
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


readStream
   
    .on('end',()=>{
        readStream.close();
        readOver=true; 
    })
    .on('error',error=>{
        console.log('error',error);
    })
    .on('data',buffer=>{
        //we have read one chunk of data from the stream
        bytesRead+=buffer.length;
        
        readCount++;
        if(firstTime){
            //i will write but not sure when it will finsih. its an async call.
            writeStream.write(buffer.toString()); //write the buffer as a string
            firstTime=false;
        } else {
            //previous data write request has been initiated but we don't know if it finished. so we will leave this data in a buffer and
            
            unsavedData+=buffer.toString(); //so data is added to previous buffer
            //my work is done here. let writeStream take the data whenever it is ready.
            //process.stdout.write('R '+unsavedData.length+"\t");
        }
        
    })


writeStream
    .on('drain',data=>{
        
        //previous data is drained. And I am ready to write. Readbale Stream has already kept the data to write
        process.stdout.write('D '+ unsavedData.length);
       // readStream.pause(); //please don't read any more data. to make sure unsavedData is not modified while we are writing
        writeStream.write(unsavedData, err=>{
            if(!err){
            unsavedData=''; //there is no unsaved data left 
            process.stdout.write("██ " );
            }
            if(readOver)
                writeStream.close();
            //else
            //    readStream.resume();  //ok readStream now you can resume
        });
        

    })
    .on('close',()=>{
        console.log('file copied successfully');
        console.log(`Total ${bytesRead} written in ${readCount} cycles`);
    })
    .on('error',error=>{
        console.log('error',error);
    })

console.log(`copying ${srcPath} to ${trgtPath}...`);




