const genreController = require('../controllers/genresController')
const authRoles = require('../middlewares/authRoles')
const bodyValidator = require('../middlewares/bodyValidator')
const createGenreValidator = require('../validators/genre.validator')

const genresRouter = require('express').Router()

genresRouter.route('/')
    .get(genreController.getAll)
    .post(authRoles('Admin'),bodyValidator(createGenreValidator), genreController.create)
    //.post(authRoles('Admin'), genreController.create)

genresRouter.route('/:id')
    //.get(authRoles('User'),genreController.getByID)
    .get(genreController.getByID)
    //.put(authRoles('User'),bodyValidator(createGenreValidator),genreController.update)
    .put(authRoles('Admin'),genreController.update)
    //.delete(authRoles('Admin'), genreController.delete)
    .delete(genreController.delete)

genresRouter.route('/deleteBook/:id')  
    .put(genreController.updateBookInGenre)
module.exports = genresRouter