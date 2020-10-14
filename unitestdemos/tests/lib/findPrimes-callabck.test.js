let {findPrimes}=require('../../api/lib/prime');

let expect=require('chai').expect;

let should=require('chai').should();
let assert=require('chai').assert;


describe('findPrimes async function tests',function(){

    
    it('should have null error for valid range ',function(){

        findPrimes(1,10, (err,primes)=>{

            //err.should.be.null; //will not work as should can't be injected to null object            
            expect(err).to.be.null;             
        });
    });


    xit('should wait for long running async function',()=>{

        findPrimes(1,500000,(err,primes)=>{

            //we will reach here after a long time
            //mocha doesn't wait this long
            primes.should.be.an('array').of.length.equal(5000);
            console.log('test has finished');
        });

        //this function ends with any error 
        //so mocha things test passed without waitng for 
        //assertions to happen

        //assert.fail('fails as test does not wait for async fucntion to complete');

    });


    it('should work with long running async using done',(done)=>{  //done is a callback that you should call once your code completes
        
        findPrimes(1,500000,(err,primes)=>{

            //we will reach here after a long time
            //mocha doesn't wait this long
            primes.should.be.an('array').of.length.greaterThan(500);
            console.log('test has finished');
            done(); //inform mocha that test has now finished.
        });

        console.log('finding primes under 5lac...');

        //this function ends with any error 
        //so mocha things test passed without waitng for 
        //assertions to happen

        //assert.fail('fails as test does not wait for async fucntion to complete');

    });


    it('should fail for invalid range',()=>{

        findPrimes(10,2,err=>{
            
            err.message.should.contain('Invalid Range');
            err.range.min.should.be.equal(10); 
        });

    });


});
