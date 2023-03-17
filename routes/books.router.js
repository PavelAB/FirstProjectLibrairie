const booksController = require('../controllers/booksController')

const booksRouter = require('express').Router()

//Pour rajoute des routes .route
booksRouter.route('/')
    .get(booksController.getAll)
    .post(booksController.create)
booksRouter.route('/:id')
    .get(booksController.getByID)
    .put(booksController.update)
    .delete(booksController.delete)

module.exports = booksRouter