const genreController = require('../controllers/genresController')

const genresRouter = require('express').Router()

genresRouter.route('/')
    .get(genreController.getAll)
    .post(genreController.create)
genresRouter.route('/:id')
    .get(genreController.getByID)
    .put(genreController.update)
    .delete(genreController.delete)

module.exports = genresRouter