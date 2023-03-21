const genreController = require('../controllers/genresController')
const authRoles = require('../middlewares/authRoles')

const genresRouter = require('express').Router()

genresRouter.route('/')
    .get(genreController.getAll)
    .post(authRoles('Admin'),genreController.create)
genresRouter.route('/:id')
    .get(authRoles('User'),genreController.getByID)
    .put(authRoles('Admin'),genreController.update)
    .delete(authRoles('Admin'), genreController.delete)

module.exports = genresRouter