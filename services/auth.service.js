const argon2 = require("argon2")
const {UserDTO,UserDTOToken} = require("../dto/user.dto")
const db = require("../models")
const jwt = require("../utils/jwt.utils")


const authService = {
    register:async(user)=>{
        try {
            const hash = await argon2.hash(user.password)
            user.password = hash
        } catch (error) {
            console.log(error);
        }
        const newUser = await db.User.create(user)
        console.log(newUser);
        const token = await jwt.generate(newUser)
        console.log(token); // pas oublie le await!!!!!

        if(newUser){
            return new UserDTOToken(newUser,token)
        }  
        return null
    },
    login:async(login,password)=>{
        //je recupere login ---> je dois verifie si il existe dans la bd
        //--->je cherche via son login
        const user = await db.User.findOne({
            where:{
                login:login
            }
        })
        if(!user)
            return null
        try {
            if ( await argon2.verify(user.password,password))
                return user
            else
                return null
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = authService