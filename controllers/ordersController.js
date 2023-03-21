const {Request,Response}= require('express')
const ordersService = require('../services/orders.service')
const SuccessResponse = require('../utils/SuccessResponse')

const ordersController = {
    /**
     * GetAll
     * @param {Request} req
     * @param { Response} res
     */
    getAll: async (req,res)=>{
        const {orders,count} = await ordersService.getAll()
        
        res.status(200).json(new SuccessResponse(orders,count))
        
    },
    /**
     * getByID
     * @param {Request} req
     * @param { Response} res
     */
    getByID: async (req,res)=>{
        const id = req.params.id
        const order = await ordersService.getById(id)
        if(order)
            res.status(200).json(order)
        else 
            res.status(400)
    },
    /**
     * Create
     * @param {Request} req
     * @param { Response} res
     */
    create: async (req,res)=>{
        const data = req.body
        const order = await ordersService.create(data)
        if(order)
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
        const order = await ordersService.update(id,data)
        if(order===true)
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
       const order = await ordersService.delete(id)
       if(order===true)
            res.sendStatus(200)
        else
            res.sendStatus(400)
   }
}
module.exports = ordersController