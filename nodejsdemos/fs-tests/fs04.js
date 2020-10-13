let fslib =require('../lib/fslib');


let folder='./temp/one/two/three';

async function testMkDir(path, options={}){
    try{

        let result=await fslib.mkdir(path);
        console.log('created',result);
    }catch(ex){
        console.log('err',ex.message);
    }
}

testMkDir('./temp1');
testMkDir('./temp2');
testMkDir('./temp1');
