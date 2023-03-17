const {Request,Response} = require('express')
const genreService = require('../services/genres.service')

const genreController = {
      /**
     * GetAll
     * @param {Request} req
     * @param { Response} res
     */
      getAll: async (req,res)=>{
        const genres = await genreService.getAll()
        if(genres)
            res.status(200).json(genres)
        else    
            res.sendStatus(400)
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
        else
            res.sendStatus(400)
    },
    /**
     * Create
     * @param {Request} req
     * @param { Response} res
     */
    create: async (req,res)=>{
        const data = req.body
        const newGenre = await genreService.create(data)
        if(newGenre)
            res.sendStatus(200)
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
        const updateGenre = await genreService.update(id,data)
        if(updateGenre===true)
            res.sendStatus(200)
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
            res.sendStatus(200)
        else
            res.sendStatus(400)
        }
}
module.exports = genreController