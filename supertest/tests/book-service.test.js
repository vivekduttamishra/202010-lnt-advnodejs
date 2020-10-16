let chai=require('chai');
const chaiAsPromised = require('chai-as-promised');
let should=chai.should();
let expect=chai.expect;
chai.use(chaiAsPromised);

let {BookManager,ServiceError}=require('../app/services/book-manager');
let Book=require('../app/services/book');

xdescribe('BookManager Tests', function () {

    var bookManager;
    let initialBookCount=0;
    var  books=[
        new Book(1,'The Accursed God'),
        new Book(2, 'The Count Of Monte Cristo')
    ]

    beforeEach(async function () {
        
        bookManager=new BookManager();
        //console.log('beforeEach called');
        for(let book of books){
           // console.log('adding',book);
            await bookManager.addBook(book);
        }
        //console.log("after adding books",bookManager.books);
        initialBookCount=bookManager.books.length;
    }); 

    describe('addBook tests',()=>{
        it('should successfully add book with unique isbn', async function(){

            let newBook=new Book(3,'Test Book');
            let result = await bookManager.addBook(newBook);

            result.count.should.equal(initialBookCount+1);
            result.book.should.equal(newBook);
        }); 

        it('should throw exception for book with existing isbn', async function(){

            let newBook=new Book(books[0].isbn, 'New Title');
            let expectedError={error:'duplicate isbn',isb:newBook.isbn};
            await expect(bookManager.addBook(newBook))
                .to.be.rejectedWith(/duplicate/)
                //.and.have.property('data',newBook.isbn);
                .then(err=>{
                    err.should.have.property('data',newBook.isbn);
                });

        });
    });

    describe('getBook By Id', function(){

        it('should return valid object with valid id',async function(){

            let existingBook=books[0];

            bookManager
                .getBookById(existingBook.isbn)
                .should
                .eventually
                //.equal(existingBook);
                .fulfilled
                .then(data=>{
                    data.should.have.property('isbn',existingBook.isbn);
                    data.should.have.property('title', existingBook.title);
                })
                
                //.and.have.property('title',existingBook.title)
                ;

        });

        it('should throw exception with invalid isbn number',async function() {
            let invalidId=0;
            await bookManager
                    .getBookById(invalidId)
                    .should.be.rejectedWith('book not found')
                    .then(error=>{
                        error.should.have.property('data',invalidId);
                    });

        });

    });

    describe('getAllBooks tests',function() {

        it('should return an array of books',async function() {

            await bookManager
                .getAllBooks()
                .should.eventually.be.fulfilled
                .and.be.an('array')
                .with.length(books.length);
        }); 
    });

});