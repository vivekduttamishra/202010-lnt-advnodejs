let express =require('express');
let {PythonShell}=require('python-shell');

let router=express.Router();
let {spawn} =require('child_process');



router.get('/spawn',(req,res)=>{
    let min= req.query.min || 2;
    let max= req.query.max||100;
    let output='';
    if(min>max){
        res.status(400).send({error:'invalid range. min should be less than max', min,max});
    }
    else{
        let python=spawn('python',['primeagent.py',`${min}`,`${max}`]);
        // python.stdout
        // .on('data',data=>{
        //     let d=data.toString();
        //     console.log(d);
        //     output+=d;
        // })
        // .on('end', ()=>{
        //     console.log('end');
        //     res.json(output);
        // });
        python.stdout.pipe(res);  //pipe the response from the spawned task directly to client. you may also pipe some transform if you need
    }
    

});

router.get('/pshell',async (req,res)=>{
    let min= req.query.min || 2;
    let max= req.query.max||100;
    let output='';
    if(min>max){
        await res.status(400).send({error:'invalid range. min should be less than max', min,max});
    }
    else{
        let option={
            args:[
                min,
                max
            ]
        };
        PythonShell.run('./primeagent.py',option,(err,result)=>{
            console.log('result',result);
            res.send(result);
        });
      
        

    }

});

router.get('/pshell2',async (req,res)=>{
    let min= req.query.min || 2;
    let max= req.query.max||100;
    let output='';
    if(min>max){
        await res.status(400).send({error:'invalid range. min should be less than max', min,max});
    }
    else{
        let option={
           // mode:'json',
            pythonOptions: ['-u'],
            args:[
                min,
                max
            ]
        };
        let pyShell=new PythonShell('./primeagent.py',option);

        //res.header('Content-Type','text/plain');
        // pyShell.on('message', message=>{
        //     console.log('=>',message);
        //     res.write(message+'\n');

        // })
        // pyShell.stdout.on('end', ()=>{
        //     res.send();

        // });
        pyShell.stdout.pipe(res);
    }

});

let amqp=require('amqplib/callback_api');

router.get('/rabbit',async(req,res)=>{

    let min= req.query.min || 2;
    let max= req.query.max||100;
    let output='';
    if(min>max){
        return await res.status(400).send({error:'invalid range. min should be less than max', min,max});
    }
    else{
        let args=[  min, max  ];

        amqp.connect('amqp://localhost',(err,connection)=>{
            if(err){
                console.log('err',err);
                res
                .status(500)
                .json({
                    error:err,
                    message:'communication with rabbitmq failed'
                });
            } else {
                connection.createChannel((err,channel)=>{
                    var input='prime-input';
                    channel.assertQueue(input,{durable:false});
                    var result='prime-result';
                    channel.assertQueue(result,{durable:false});

                    channel.sendToQueue(input,new Buffer.from(JSON.stringify(args)));
                    channel.consume(result, msg=>{
                        res.send(msg.content.toString())
                    },{noAck:true});
                    setTimeout(()=>connection.close(), 500);
                });

            }
        });
        
    }


});

module.exports=router;
