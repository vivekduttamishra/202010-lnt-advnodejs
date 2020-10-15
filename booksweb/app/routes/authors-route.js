let express=require('express');
let router=express.Router();

let AuthorService=require('../services/author-service');

let authorService=new AuthorService();

//Route for : Author


router.get('/', async(req,res)=>{
    try{
        //TODO: Get all  Authors
        let authors=await authorService.getAllAuthors();        
        res.send(authors);

    }catch(err){
        console.log('err in path: /',err);
        res.status(500).send(err);
    }
});

router.post('/', async(req,res)=>{
    try{
        let author=req.body; //get the author from the post request
        let result=await authorService.addAuthor(author);
        res.status(201).send(result);
    }catch(err){
        console.log('err in path: /',err);
        res.status(400).send(err);
    }
});

router.get('/:id', async(req,res)=>{
    try{
        let id=req.params.id;
        let author=await authorService.getById(id);    
        await res.send(author);
    }catch(err){        
        console.log('error in requet',err);
        res.status(404).send(err);
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
        await authorService.removeAuthor(id);
        res.status(204).send();
    }catch(err){
        console.log('err in path: delete',err);
        res.status(404).send(err);
    }
});

module.exports=router;