const { Router } = require('express');
const booksController = require('../controllers/books');

const booksRouter = Router();

booksRouter.get('/', booksController.getBooks);
booksRouter.post('/', booksController.createBook);
booksRouter.get('/data/seed', booksController.bookSeeder);
booksRouter.get('/:id', booksController.getBook);
booksRouter.delete('/:id', booksController.deleteBook);
booksRouter.put('/:id', booksController.updateBook);

module.exports = booksRouter;
