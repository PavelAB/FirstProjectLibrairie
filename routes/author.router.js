const authorRouter = require('express').Router()
const authorController = require('../controllers/authorController')

//Si je precise le chemin '/author' dans ce fichier j'aurai /author/author vu que je regroupe tout dans le index.js
authorRouter.route('/')
    .get(authorController.getAll)              //getAll
    .post(authorController.create)             //create
authorRouter.route('/:id')
    .get(authorController.getByID)              //getbyid
    .put(authorController.update)              //update
    .delete(authorController.delete)           //delete

module.exports=authorRouter