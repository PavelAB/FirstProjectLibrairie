 const {Request,Response}= require('express')
const BookServices = require('../services/books.service')

 const booksController = {
    /**
     * GetAll
     * @param {Request} req
     * @param { Response} res
     */
    getAll: async (req,res)=>{
        const allBooks = await BookServices.getAll()
        if(allBooks)
        {
            res.status(200).json(allBooks)
        }
        else 
            res.status(501)
    },
    /**
     * getByID
     * @param {Request} req
     * @param { Response} res
     */
    getByID: async (req,res)=>{
        const id = req.params.id
        const thisBook = await BookServices.getById(id)
        if(thisBook)
        {
            res.status(200).json(thisBook)
        }
        else
            res.sendStatus(501)
    },
    /**
     * Create
     * @param {Request} req
     * @param { Response} res
     */
    create: async (req,res)=>{
        const data = req.body
        const newBook = await BookServices.create(data)
        if(newBook)
            res.status(200).json(newBook)
        else    
            res.sendStatus(501)
    },
    /**
     * update
     * @param {Request} req
     * @param { Response} res
     */
    update: async (req,res)=>{
        const data = req.body
        const id = req.params.id

        const updateBook = await BookServices.update(id,data)

        if(updateBook===true)
        //TO DO modifie .json
            res.status(200).json('ok')
        else    
            res.sendStatus(501)
    },
    /**
    * delete
    * @param {Request} req
    * @param { Response} res
    */
   delete: async (req,res)=>{
       const id = req.params.id
       const isDeleted = await BookServices.delete(id)
       if(isDeleted===true)
            res.sendStatus(200)
        else
            res.sendStatus(400)
   }
 }
 module.exports = booksController