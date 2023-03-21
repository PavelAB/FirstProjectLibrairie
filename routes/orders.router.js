const ordersController = require('../controllers/ordersController')
const authRoles = require('../middlewares/authRoles')

const ordersRouter = require('express').Router()


ordersRouter.route('/')
    .get(ordersController.getAll)
    .post(ordersController.create)
ordersRouter.route('/:id')
    .get(ordersController.getByID)
    .put(authRoles('Admin'),ordersController.update)
    .delete(authRoles('Admin'), ordersController.delete)
    
module.exports = ordersRouter