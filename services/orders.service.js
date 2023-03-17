
const db = require("../models");

const ordersService ={
    getAll:async()=>{
        const orders = await db.Orders.findAll()
        if(orders)
            return orders
    
    },
    getById:async(id)=>{
        const order = await db.Orders.findByPk(id)
        if(order)
            return order
    },
    create:async(data)=>{
        const newOrder = await db.Orders.create(data)
        if(newOrder)
            return true
        else
            return false
    },
    update:async(id,data)=>{
        const updateOrder = await db.Orders.update(data,{
            where:{
                ID_Order : id
            }
        })
        if(updateOrder[0]===1)
            return true
        else
            return false
    },
    delete:async(id)=>{
        const deleteOrder = await db.Orders.destroy({
            where:{
                ID_Order: id
            }
        })
        if(deleteOrder===1)
            return true
        else
            return false
    }

}
module.exports = ordersService