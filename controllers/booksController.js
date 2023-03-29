 const {Request,Response}= require('express')
const BookServices = require('../services/books.service')
const SuccessResponse = require('../utils/SuccessResponse')

 const booksController = {
    /**
     * GetAll
     * @param {Request} req
     * @param { Response} res
     */
    getAll: async (req,res)=>{
        const {books,count} = await BookServices.getAll()
        res.status(200).json(new SuccessResponse(books,count))
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
            console.log('booooooooooooooooook',thisBook);
            res.status(200).json(thisBook)
        }
        else
            res.sendStatus(400)
    },
    /**
     * Create
     * @param {Request} req
     * @param { Response} res
     */
    create: async (req,res)=>{
        console.log(req.body);
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
     * deleteGenreInBook
     * @param {Request} req
     * @param { Response} res
     */
    deleteGenreInBook: async (req,res)=>{
        const id = req.params.id
        const data = req.body.ID_genres
        console.log(data);
        const updateGenre = await BookServices.deleteGenreInBook(id,data)
        if(updateGenre===true){
            res.sendStatus(204)
        }
        else    
            res.sendStatus(400)
    },
    
    /**
     * deleteAuthorInBook
     * @param {Request} req
     * @param { Response} res
     */
    deleteAuthorInBook: async (req,res)=>{
        
        const id = req.params.id
        const data = req.body.ID_Author
        console.log(data);
        const updateGenre = await BookServices.deleteAuthorInBook(id,data)
        if(updateGenre===true){
            res.sendStatus(204)
        }
        else    
            res.sendStatus(400)
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
            res.sendStatus(204)
        else
            res.sendStatus(400)
   }
 }
 module.exports = booksController