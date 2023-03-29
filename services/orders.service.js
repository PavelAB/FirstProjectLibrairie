
const { OrdersDTO } = require("../dto/orders.dto");
const { Book, User } = require("../models");
const db = require("../models");

const ordersService ={
    getAll:async()=>{
        // const orders = await db.Orders.findAll({
        //     include:[Book] 
        // })
        // if(orders)
        //     return orders
        const {rows,count}= await db.Orders.findAndCountAll({
            include:[Book,User],
            distinct:true
        })
        console.log(rows);
        const orders = rows.map(test=>new OrdersDTO(test))
        return{
            orders,count
        } 
    
    },
    getAllForThisUser:async(id)=>{
        const {rows,count}= await db.Orders.findAndCountAll({
            include:[Book,User],
            where:{
                UserIDUser:id
            },
            distinct:true
        })
        const orders = rows.map(test=>new OrdersDTO(test))
        return{
            orders,count
        } 
    
    },
    getById:async(id)=>{
        const order = await db.Orders.findByPk(id,{
            include:[Book,User]
        })
        if(order)
            return new OrdersDTO(order)
    },
    create:async(data)=>{
    const transaction = await db.sequelize.transaction()
    let newOrder
    try {
        newOrder = await db.Orders.create(data)
        console.log(newOrder);
        await newOrder.addBook(data.book,transaction)
        await transaction.commit()
    } catch (error) {
        console.log(error);
        await transaction.rollback()
        return false    
    }
    if(newOrder)
        return true
    },
    update:async(id,data)=>{
        console.log(data,id);
        const updateOrder = await db.Orders.update(data,{
            where:{
                ID_Order : id
            }
        })
        console.log(upda);
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