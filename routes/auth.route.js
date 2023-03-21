const authController = require('../controllers/authController')
const authRoles = require('../middlewares/authRoles')

const authRouter = require('express').Router()

authRouter.route('/register') // instance d'express.Route() --> je precise la route ---> j'envoi le methode de request ---> je fais l'appelle a mon controller que gere le focntionnement
    .post(authController.register)
authRouter.route('/login')
    .post(authController.login)


module.exports = authRouter