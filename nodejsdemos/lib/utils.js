

async function sleep(ms=0){

    return new Promise(resolve=>{
        setTimeout(resolve, ms); //this promise will be resolved after ms milliseconds
    });
}


module.exports = {sleep};