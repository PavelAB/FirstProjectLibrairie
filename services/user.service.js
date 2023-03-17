const db = require("../models");

const userService ={
    getAll:async()=>{
        const users = await db.User.findAll()
        if(users)
            return users
    
    },
    getById:async(id)=>{
        const user = await db.User.findByPk(id)
        if(user)
            return user
    },
    create:async(data)=>{
        const newUser = await db.User.create(data)
        if(newUser)
            return true
        else
            return false
    },
    update:async(id,data)=>{
        const updateUser = await db.User.update(data,{
            where:{
                ID_User:id
            }
        })
        if(updateUser[0]===1)
            return true
        else
            return false
    },
    delete:async(id)=>{
        const deleteUser = await db.User.destroy({
            where:{
                ID_User:id
            }
        })
        console.log("test");
        if(deleteUser===1)
            return true
        else
            return false
    }

}
module.exports = userService