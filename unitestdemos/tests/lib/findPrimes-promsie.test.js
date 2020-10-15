let {promisedPrimes}=require('../../api/lib/primeutils3');

let chai=require('chai');

//add chai-as-promsied features to chai
chai.use(require('chai-as-promised'));
let expect=chai.expect;
let should=chai.should();





xdescribe('promisedPrimesTest',function(){

    describe('testing as promise',()=>{

        it('should return 4 primes under 10',(done)=>{
            promisedPrimes(1,10)
                .then(primes=>{
                    primes.should.be.an('array').of.length(4).and.have.members([2,3,5,7]);
                    done(); 
                });
        });

        it('should return 25 primes under 100',()=>{
           return promisedPrimes(1,100)
                .then(primes=>{
                    primes.should.be.an('array').of.length(25);
                    
                });
        });
    
        it('should return error for invalid range',(done)=>{
            promisedPrimes(10,1)
                .catch(err=>{
                    err.should.not.be.null;
                    err.message.should.contain('Invalid Range');
                    err.range.min.should.equal(10);
                    err.range.max.should.equal(1);
                    done();
                });  
        });

    });

    
    describe('testing as async',()=>{

        it('should return 4 primes under 10', async ()=>{
            
            let primes=await promisedPrimes(1,10);

            primes.should.be.an('array').of.length(4);

            //done();
                
        });
    
        xit('should throw error for invalid range',async ()=>{
            
            await expect(async ()=> await promisedPrimes(10,1))  //this code will throw exception at a later point of time
                                .to.throw();    //It is too soon to test for that error
               
        });

        it('should throw error for invalid range after await',async ()=>{
           
            try{
                await promisedPrimes(10,1);
                                
            }catch(err){
                err.message.should.contain('Invalid Range');
            }          
               
        });

    });


    describe('testing promises using chai-as-promised',()=>{

        it('should return 4 primes under 10',async()=>{

            promisedPrimes(1,10)
                .should
                .eventually //await for promise to resolve
                .be.an('array').with.members([2,3,5,7]);

        });


        it('should reject invalid range',async()=>{

            promisedPrimes(10,1)
                .should
                .eventually
                .be.rejectedWith('Invalid Range')
                //.and.have.property('range',{min:10,max:1});
                .then(err=>{
                    err.range.min.should.equal(10);
                    err.range.max.should.equal(1);

                })
                
        });


    });
     

});
