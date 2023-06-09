const userController = require('../controllers/userController')
const authRoles = require('../middlewares/authRoles')
const authUserId = require('../middlewares/authUserId')
const bodyValidator = require('../middlewares/bodyValidator')
const createUserValdator = require('../validators/user.validator')

const userRouter = require('express').Router()


userRouter.route('/')
    .get(authRoles('Admin'), userController.getAll)
    .post(authRoles('User'),bodyValidator(createUserValdator),userController.create)
userRouter.route('/:id')
    .get(authRoles('User'),authUserId(),userController.getByID)
    .put(authRoles('User'),bodyValidator(createUserValdator),userController.update)
    .delete(authRoles('Admin'),userController.delete)
    
module.exports = userRouter