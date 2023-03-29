const {Request,Response} = require('express')
const genreService = require('../services/genres.service')
const SuccessResponse = require('../utils/SuccessResponse')

const genreController = {
      /**
     * GetAll
     * @param {Request} req
     * @param { Response} res
     */
      getAll: async (req,res)=>{
        const {tests,count} = await genreService.getAll()
        res.status(200).json(new SuccessResponse(tests,count))
    },
    /**
     * getByID
     * @param {Request} req
     * @param { Response} res
     */
    getByID: async (req,res)=>{
        const id = req.params.id
        const genre = await genreService.getById(id)
        if(genre)
            res.status(200).json(genre)
        else{
            res.sendStatus(400)}
    },
    /**
     * Create
     * @param {Request} req
     * @param { Response} res
     */
    create: async (req,res)=>{
        const data = req.body
        const newGenre = await genreService.create(data)
        if(newGenre){
            res.sendStatus(204) //si je renvoi le code 200 et 201, il y aucune response
        }    
        else
            res.sendStatus(400)
    },
    /**
     * update
     * @param {Request} req
     * @param { Response} res
     */
    update: async (req,res)=>{
        const id = req.params.id
        const data = req.body
        console.log(req.body);
        const updateGenre = await genreService.update(id,data)
        if(updateGenre===true){
            res.sendStatus(204)
        }
        else    
            res.sendStatus(400)
    },
    /**
     * updateBookInGenre
     * @param {Request} req
     * @param { Response} res
     */
    updateBookInGenre: async (req,res)=>{
        const id = req.params.id
        const data = req.body.ISBN
        const updateGenre = await genreService.updateBookInGenre(id,data)
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
       const deleteGenre = await genreService.delete(id)
       if(deleteGenre)
            res.sendStatus(204)
        else
            res.sendStatus(400)
        }
}
module.exports = genreController