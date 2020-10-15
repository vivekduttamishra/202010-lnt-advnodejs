let express = require('express');
let router = express.Router();
let BookService = require('../services/book-service');
//Route for : Book
let bookService = new BookService();

router.get('/', async (req, res) => {
    try {
        //TODO: Get all  Books

        let books = await bookService.getAllBooks();
        res.send(books);

    } catch (err) {
        console.log('err in path: /', err);
        res.status(400).send(err);
    }
});

router.get('/by/:authorId', async (req, resp) => {

    try {
        let { authorId } = req.params;
        if (!authorId)
            await resp.status(400).send({ error: 'author id not supplied' });

        let books = await bookService.search({ where: { authorId } });
        console.log('got books',books);
        if (books.length == 0) {
            await resp.status(404).send({ error: 'No Book by the author found', authorId });
        } else{
            await resp.send(books);
        }
    } catch (err) {
        console.log(err);
        await resp.status(500).send(err);
    }


});

router.post('/', async (req, res) => {
    try {
        let model = req.body
        //TODO: add new Book
        res.send('adding new Book');
    } catch (err) {
        console.log('err in path: /', err);
        res.status(400).send(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        //TODO: get Book by id

        res.send(`get Book by id: ` + id);
    } catch (err) {
        console.log('err in path: /', err);
        res.status(400).send(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let model = req.body;
        //TODO: update the records

        res.send(`update Book with id: ` + id);
    } catch (err) {
        console.log('err in path: /', err);
        res.status(400).send(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        //TODO: delete Book by id

        res.send(`delete Book by id: ` + id);
    } catch (err) {
        console.log('err in path: /', err);
        res.status(404).send(err);
    }
});

module.exports = router;