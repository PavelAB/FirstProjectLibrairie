const userController = require('../controllers/userController')

const userRouter = require('express').Router()


userRouter.route('/')
    .get(userController.getAll)
    .post(userController.create)
userRouter.route('/:id')
    .get(userController.getByID)
    .put(userController.update)
    .delete(userController.delete)
    
module.exports = userRouter