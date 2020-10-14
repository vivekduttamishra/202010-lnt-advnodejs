let {PrimeStream} =require('../lib/primestream');



let stream=new PrimeStream(2,1000);

stream.on('data', data=>{
    console.log('data',data.toString());
    
})
.on('end',data=>{
    console.log('end',data.toString());
});




