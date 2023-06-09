const { Request,Response } = require("express");
const userService = require("../services/user.service");
const jwt = require("../utils/jwt.utils");
const SuccessResponse = require("../utils/SuccessResponse");



const userController = {
    
/**
     * GetAll
     * @param {Request} req
     * @param { Response} res
     */
    getAll: async (req,res)=>{
        const {users,count} = await userService.getAll()
        
        res.status(200).json(new SuccessResponse(users,count))
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
            res.sendStatus(204)
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
            res.sendStatus(204)
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
            res.sendStatus(204)
        else
            res.sendStatus(400)
    }
}

module.exports = (userController)