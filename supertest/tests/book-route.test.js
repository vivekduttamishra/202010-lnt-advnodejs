let request =require('supertest');
let assert = require('assert');

let app=require('../app/app');

function get(url){
    return request(app)
                .get(url)
                .set('accept','application/json');
                //.expect('Content-Type',/json/);


}

function post(url, data){
    return request(app)
            .post(url)
            .send(data)
            .set('Accept', 'application/json')
            .set('Content-Type','application/json')
            .expect('Content-Type', /json/);
           
            
}

xdescribe('GET /api/books tests',function(){

    it('should return success for /api/books',function(done){

        get('/api/books').expect(200,done);

    });

    it('should return 200 for book by valid id',function(done){
        get('/api/books/1111').expect(200,done);
    });

    
    it('should return 404 for book by invalid id',function(done){
        get('/api/books/5000').expect(404,done);
    });

    it('should add a book with valid details',function(done){
        let book={isbn:7000, title:'Test Book'};

        //book is added successfully
        post('/api/books',book)
            .expect(201)
            .end(err=>{
                if(err)
                    return done(err);
                else
                    return done();
            });
            
        //now book exists
        //get(`/api/books/${book.isbn}`).expect(404);


    });

    it('should fail with 400 for duplicate isbn',function(done){
        let book={isbn:1111, title:'Test Book'};

        //book is added successfully
        post('/api/books',book)
            .expect(400)
            .end(err=>{
                if(err)
                    return done(err);
                else
                    return done();
            });
            
      


    });

    it('should return valid book with valid id', async ()=>{

        let id=1111;
        let response= await get('/api/books/'+id);
        assert.strictEqual(response.status,200);
        assert.strictEqual(response.body.isbn, id);
        //expect(response.status).toBe(200);
        //expect(response.body.isbn).toBe(id);
        //done();

    });

    it('should return valid book with valid id from actual service', async ()=>{

        let id=1111;
        let req= request('http://localhost:3000');
        let response=await req.get('/api/books/'+id);
        assert.strictEqual(response.status,200);
        assert.strictEqual(response.body.isbn, id);
        //expect(response.status).toBe(200);
        //expect(response.body.isbn).toBe(id);
        //done();

    });

});

