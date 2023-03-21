const authorRouter = require('express').Router()
const authorController = require('../controllers/authorController')
const authRoles = require('../middlewares/authRoles')

//Si je precise le chemin '/author' dans ce fichier j'aurai /author/author vu que je regroupe tout dans le index.js
authorRouter.route('/')
    .get(authRoles('User'),authorController.getAll)              //getAll
    .post(authRoles('Admin'),authorController.create)             //create
authorRouter.route('/:id')
    .get(authRoles('User'),authorController.getByID)              //getbyid
    .put(authRoles('Admin'),authorController.update)              //update
    .delete(authRoles('Admin'),authorController.delete)           //delete

module.exports=authorRouter