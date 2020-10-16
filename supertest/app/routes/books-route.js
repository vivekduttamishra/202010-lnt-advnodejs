let express = require('express');
const { response } = require('../app');
let {BookManager} = require('../services/book-manager');
let books = require('../services/book-source');


let bookManager = new BookManager();

for (let book of books)
    bookManager.books.push(book);


let router = express.Router();


router.get('/', async (req, res) => {
    let {term}=req.query;

    let books=[];
    if(term){
        
        books=await bookManager.search(term);
    }
    else 
        books = await bookManager.getAllBooks();
    await res.json(books);
});

router.get('/by/:author',async (req,res)=>{
    let {author}=req.params;
    
    if(!author)
        return await res.status(400).json({error:'author not specified'});

    let result=await bookManager.getBookByAuthor(author);
    await res.json(result);

});




router.post('/', async (req, res) => {
    try {
        let book = req.body;
        
        await bookManager.addBook(book);
        res.status(201).json(book);
    } catch (e) {
        res.status(400).json(e);
    }
});

async function processBook(req, res, action){
    let isbn = req.params.isbn;
    try {
        
        
        if (!isbn)
            return await res.status(400).json({ error: 'Missing ISBN Number' });

        let book = await bookManager.getBookById(isbn);
        
        return await action(book,isbn)

    } catch (err) {
        return await res.status(404).json({ error: 'No Such Book', isbn });
    }
}

router.get('/:isbn', async (req, res) => {

    await processBook(req,res,async book=>{
        
        return await res.json(book);
    });
    
});

router.put('/:isbn', async (req, res) => {

    await processBook(req,res, async (book,isbn)=>{
        let update=req.body;
        if(update.isbn === +isbn){
            bookManager.updateBook(isbn,update);
            res.status(202).json(update);
        } else {
            res.status(403).json({error:'isbn number mismatch', expected: isbn, actual: update.isbn});
        }
            
    });
});


router.delete('/:isbn', async (req, res) => {

    await processBook(req,res, async (book,isbn)=>{
       await bookManager.remove(isbn);    
       await res.status(204).json('') ;
    });
});




module.exports=router;