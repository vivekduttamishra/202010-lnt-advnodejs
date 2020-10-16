let {delay, contains} =require('../utils');

class ServiceError{
    constructor(message, data, status=400){
        this.message=message;
        this.data=data;
        this.status=status;
    }
}

class BookManager{
    
    constructor(){
        this.books=[];
    }

    async getAllBooks(){
        await delay(1500);
        return this.books;
    }

    async getBookById(isbn){
        await delay(1000);
        isbn=+isbn;
        
        let book= this.books.find(b =>isbn=== b.isbn);
        
        if(!book)
            throw new ServiceError('book not found', isbn, 404);
        else
            return book;
    }

    async getBookByAuthor(author){
        author=author.toLowerCase();
        await delay(1000);
        return this.books.filter(b=> contains(b.author,author));
    }

    async search(term){
        await delay(1200);
        return this.books.filter(b=> contains(b.title,term) || contains(b.author,term));
    }

    async failForExistingIsbn(isbn){
        await delay(1000);
        isbn= +isbn;
        let existing= this.books.find(b=>b.isbn==isbn);
        if(existing)
            //throw {error:'duplicate isbn',isbn};
            throw new ServiceError('duplicate isbn', isbn, 400);
        
    }

    async addBook(book){
        await this.failForExistingIsbn(book.isbn);
        
        this.books.push(book);
        return {
            count: this.books.length,
            book
        };
    }

    async remove(isbn){
        await this.getBookById(isbn);
        isbn= +isbn;
        this.books=this.books.filter(book => book.isbn!=isbn);
    }

    async updateBook(isbn, book){
        await this.remove(isbn);
        
        this.books.push(book);
    }

}

module.exports={BookManager,ServiceError};