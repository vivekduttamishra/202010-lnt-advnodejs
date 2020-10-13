let fs =require('fs');

try{
    let folderName='./temp';
    console.log('createing folder', folderName)
    fs.mkdirSync(folderName);   //create a temp folder
    console.log('folder is created');
} catch(ex){
    console.log('Error:',ex.message);
}


