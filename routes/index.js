const authRouter = require('./auth.route')
const authorRouter = require('./author.router')
const booksRouter = require('./books.router')
const genresRouter = require('./genres.router')
const ordersRouter = require('./orders.router')
const userRouter = require('./user.router')


//instance de router
const router = require('express').Router()




// je definie les routes 
router.use('/author',authorRouter)
router.use('/books',booksRouter)
router.use('/orders',ordersRouter)
router.use('/user',userRouter)
router.use('/genres',genresRouter)
router.use('/auth',authRouter)


//const router = authorRouter


module.exports=router