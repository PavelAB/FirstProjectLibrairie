const booksController = require('../controllers/booksController')
const authRoles = require('../middlewares/authRoles')
const bodyValidator = require('../middlewares/bodyValidator')
const createBookValidator = require('../validators/book.validator')

const booksRouter = require('express').Router()

//Pour rajoute des routes .route
booksRouter.route('/')
    .get(booksController.getAll)
    .post(authRoles('Admin'),bodyValidator(createBookValidator),booksController.create)
booksRouter.route('/:id')
    .get(authRoles('User'),booksController.getByID)
    .put(authRoles('Admin'),booksController.update)
    .delete(authRoles('Admin'), booksController.delete)

module.exports = booksRouter