let express=require('express');
let router=express.Router();

//Route for : Author


router.get('/', async(req,res)=>{
    try{
        //TODO: Get all  Authors
        
        res.send('list all Authors');
    }catch(err){
        console.log('err in path: /',err);
        res.status(400).send(err);
    }
});

router.post('/', async(req,res)=>{
    try{
        let model=req.body
        //TODO: add new Author
        res.send('adding new Author');
    }catch(err){
        console.log('err in path: /',err);
        res.status(400).send(err);
    }
});

router.get('/:id', async(req,res)=>{
    try{
        let id=req.params.id;
        //TODO: get Author by id
        
        res.send(`get Author by id: `+id);
    }catch(err){
        console.log('err in path: /',err);
        res.status(400).send(err);
    }
});

router.put('/:id', async(req,res)=>{
    try{
        let id=req.params.id;
        let model=req.body;
        //TODO: update the records
        
        res.send(`update Author with id: `+id);
    }catch(err){
        console.log('err in path: /',err);
        res.status(400).send(err);
    }
});

router.delete('/:id', async(req,res)=>{
    try{
        let id=req.params.id;
        //TODO: delete Author by id
        
        res.send(`delete Author by id: `+id);
    }catch(err){
        console.log('err in path: /',err);
        res.status(404).send(err);
    }
});

module.exports=router;