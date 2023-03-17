const ordersController = require('../controllers/ordersController')

const ordersRouter = require('express').Router()


ordersRouter.route('/')
    .get(ordersController.getAll)
    .post(ordersController.create)
ordersRouter.route('/:id')
    .get(ordersController.getByID)
    .put(ordersController.update)
    .delete(ordersController.delete)
    
module.exports = ordersRouter