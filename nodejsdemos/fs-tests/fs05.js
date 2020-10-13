let fs =require('fs');

require('../lib/utils');



let path='./testfile1.dat';

console.log('reading the file ',path);

//read the file synchrnously
let data=null;

try{
    data=fs.readFileSync(path); //may throw an exception
    console.log('typeof(data)',data.getType());
    console.log('\n----------------------');
    process.stdout.write(data.toString());//.toLocaleUpperCase());
    console.log('----------------------');

}catch(ex){
    console.log('error',ex.message);
}






