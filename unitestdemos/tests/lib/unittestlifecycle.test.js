let {promisedPrimes}=require('../../api/lib/primeutils3');

let expect=require('chai').expect;

let should=require('chai').should();
let assert=require('chai').assert;


xdescribe('promisedPrimesTest',function(){

    beforeEach(()=>{
        console.log('beforeEach called');

    });

    beforeEach(()=>{
        console.log('beforeEach2 called');

    });


    this.beforeAll(()=>{
        console.log('before all test');
    })

    this.afterAll(()=>{
        console.log('after all test');
    })

    afterEach(()=>{
        console.log('afterEach called');
    });

    it('should be test1',()=>{});

    it('should be test2',()=>{});

    it('should be test3',()=>{});

    describe('sub section',()=>{
        beforeEach(()=>{

            console.log('subsection before each');
        });
        it('should be test4',()=>{});

        it('should be test5',()=>{});

    });


    

});
