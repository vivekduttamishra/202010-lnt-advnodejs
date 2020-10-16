let express=require('express');

let app=express()
let bodyParser=require('body-parser');

const port=process.env.port||3000;

app.use(bodyParser.json());

app.use('/api/primes', require('./routes/primes-route.js'));

app.get('/demo01',async(req,res)=>{
    let garbage=new Array(10000000); //Its a garbage but not a memory leak. 
                                    //Its a local variable and reference is lost after function call.
    res.send('created let garbage=new Array(10000000)');
});

app.get('/demo02',async(req,res)=>{
    //It's again not a memory although added to req object which is long lived
    //After every request, once it over, 
    //express server marks the request object as dead by removing all references
    req.garbage=new array(10000000);  
    res.send('added gargbage to request object');
});

let primeService =require('./service/prime-service');
app.get('/primes/:min/:max',async (req,res)=>{

    let {min,max}=req.params;

    req.primes=[];
    //console.log(`finding primes ${min}-${max}`);
    primeService
    .submitPrimeRequest(min,max)
        .on('PRIME',data=>{
            //console.log('data',data);
            req.primes.push(data.prime);
        })
        .on('FINISHED',()=>{
            //console.log('finished');
            res.json(req.primes);
        });
});








app.listen(port,(err)=>{
    if(!err)
        console.log(`server started on port `+ port);
    else
        console.log(`server failed to start on port `+ port+`:`+err);
});