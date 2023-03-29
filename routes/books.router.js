const booksController = require('../controllers/booksController')
const genreController = require('../controllers/genresController')
const authRoles = require('../middlewares/authRoles')
const bodyValidator = require('../middlewares/bodyValidator')
const [createBookValidator,createBookValidatorForAuthor,createBookValidatorForGenres] = require('../validators/book.validator')

const booksRouter = require('express').Router()

//Pour rajoute des routes .route
booksRouter.route('/')
    .get(booksController.getAll)
    //.post(authRoles('Admin'),bodyValidator(createBookValidator),booksController.create)
    .post(authRoles('Admin'),booksController.create)

booksRouter.route('/:id')
    .get(authRoles('User'),booksController.getByID)
    //.get(booksController.getByID)
    .put(authRoles('Admin'),bodyValidator(createBookValidator),booksController.update)
    .delete(authRoles('Admin'), booksController.delete)
booksRouter.route('/AuthorForBook/:id')
    .put(authRoles('Admin'),bodyValidator(createBookValidatorForAuthor),booksController.update)
booksRouter.route('/GenresForBook/:id')
    .put(authRoles('Admin'),bodyValidator(createBookValidatorForGenres),booksController.update)
booksRouter.route('/deleteAuthor/:id')
    .put(booksController.deleteAuthorInBook)
booksRouter.route('/deleteGenre/:id')
    .put(booksController.deleteGenreInBook)
module.exports = booksRouter