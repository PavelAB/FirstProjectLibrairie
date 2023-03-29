const ordersController = require('../controllers/ordersController')
const authRoles = require('../middlewares/authRoles')
const authUserId = require('../middlewares/authUserId')
const bodyValidator = require('../middlewares/bodyValidator')
const { User } = require('../models')
const createOrderValidator = require('../validators/order.validator')

const ordersRouter = require('express').Router()


ordersRouter.route('/')
    .get(authRoles('Admin'),ordersController.getAll)
    .post(bodyValidator(createOrderValidator),ordersController.create)
ordersRouter.route('/:id')
    .get(authRoles('User'),authUserId(),ordersController.getByID)
    .put(authRoles('Admin'),bodyValidator(createOrderValidator),ordersController.update)
    .delete(authRoles('Admin'), ordersController.delete)
ordersRouter.route('/OrdersForUser/:id')
    .get(ordersController.getAllForThisUser)
module.exports = ordersRouter