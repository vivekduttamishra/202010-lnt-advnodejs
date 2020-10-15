

let {promisedPrimes}=require('../../api/lib/primeutils3');

let chai=require('chai');

//add chai-as-promsied features to chai
chai.use(require('chai-as-promised'));
let expect=chai.expect;
let should=chai.should();



describe('promisedPrimes coverage tests',()=>{

    it('should return 4 for primes under 10',async ()=>{

        promisedPrimes(0,10).should.eventually.be.an('array').of.length(4);

    }); 

    it('should reject for Invalid Range', async()=>{
        promisedPrimes(100,1).should.eventually.be.rejected;
    });

    it('should find 0 primes in negative range',async()=>{
        promisedPrimes(-10,0).should.eventually.be.an('array').of.length(0);
    });

    it('should find more than 500 primes in range 1-5000',async()=>{
       let result=await promisedPrimes(1,5000);

       result.should.be.an('array').of.length.greaterThan(500);
       
    });

});