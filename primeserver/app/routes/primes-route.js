let express=require('express');
let router=express.Router();

//Route for : PrimeNumbers

router.get('/:min/:max',async(req,res)=>{

    let {min,max}=req.params;
    res.json(`finding primes between ${min}-${max}`);

});



module.exports=router;

