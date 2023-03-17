const { Request,Response } = require("express");
const userService = require("../services/user.service");


const userController = {
    
/**
     * GetAll
     * @param {Request} req
     * @param { Response} res
     */
    getAll: async (req,res)=>{
        const users = await userService.getAll()
        if(users)
            res.status(200).json(users)
    },
    /**
     * getByID
     * @param {Request} req
     * @param { Response} res
     */
    getByID: async (req,res)=>{
        const id = req.params.id
        const user = await userService.getById(id)
        if(user)
            res.status(200).json(user)
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
        const user = await userService.create(data)
        if(user)
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
        const user = await userService.update(id,data)
        if(user===true)
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
       const user = await userService.delete(id)
        if(user)
            res.sendStatus(200)
        else
            res.sendStatus(400)
    }
}

module.exports = (userController)