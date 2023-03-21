const { Request, Response } = require("express")
const authorService = require("../services/author.service")
const SuccessResponse = require("../utils/SuccessResponse")



const authorController  = {
    /**
     * GetAll
     * @param {Request} req
     * @param { Response} res
     */
    getAll: async (req,res)=>{ 
        //le nethode getAll est un promess donc il faut absolument rajoute un await avant si non en resultat je recois un promesse
        const {authors,count} = await authorService.getAll()
        //je peux simplement envoyer ma variable sous format JSON pour affiche les donner, mais il vaut mieux passer par DTO pour securise mes donnes
        res.status(200).json(new SuccessResponse(authors,count))
    },
    /**
     * getByID
     * @param {Request} req
     * @param { Response} res
     */
    getByID: async (req,res)=>{
        const id = req.params.id
        const author = await authorService.getByID(id)
        if(author===null)
            res.sendStatus(400)
        else
            res.status(200).json(author)
    },
    /**
     * Create
     * @param {Request} req
     * @param { Response} res
     */
    create: async (req,res)=>{
        //je recupere les donnes dans la variable data
        const data = req.body
        //j'appele le srvice authorService et je passe en parametre les donnee que je veux insere dans ma bd
        const newAuthor = await authorService.create(data)
        //Je recois true/false en fonction de ca j'effectuer l'etap suivant
        if(newAuthor===true)
            {
                res.sendStatus(200)
            }
        else{
            res.sendStatus(501)
        }
    },
    /**
     * update
     * @param {Request} req
     * @param { Response} res
     */
    update: async (req,res)=>{
        const data = req.body
        const id = req.params.id
        const updateAuthor = await authorService.update(id,data)
        if(updateAuthor===true)
        {
            res.sendStatus(200)
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
        const author = await authorService.delete(id)   
        res.sendStatus(200)
   }

} 

module.exports=(authorController)