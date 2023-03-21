const db = require("../models");
const argon2 = require('argon2');
const { UserDTO } = require("../dto/user.dto");


const userService ={
    getAll:async()=>{
        const {rows,count}= await db.User.findAndCountAll({
            distinct:true
        })
        const users = rows.map(test=>new UserDTO(test))
        return{
            users,count
        }
    },
    getById:async(id)=>{
        const user = await db.User.findByPk(id)
        if(user)
            return new UserDTO(user)
    },
    create:async(data)=>{
        try {
            const newPass = await argon2.hash(data.password)
            data.password = newPass
        } catch (error) {
            console.log(error);
        }
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