const { Request,Response } = require("express")
const { UserDTOToken } = require("../dto/user.dto")
const authService = require("../services/auth.service")
const jwt = require("../utils/jwt.utils")


const authController = {
    /**
     * register
     * @param {Request} req 
     * @param {Response} res 
     */
    register:async(req,res)=>{
        const user = req.body
        const newUser = await authService.register(user)
        if(newUser)
            res.status(200).json(newUser)
        else
            res.sendStatus(400) 
    },
    /**
     * login
     * @param {Request} req 
     * @param {Response} res 
     */
    login:async(req,res)=>{
        const {login,password} = req.body
        const isLogin = await authService.login(login,password)
        if(!isLogin){
            res.sendStatus(401)
            return
        }
        const token = await jwt.generate(isLogin)
        
        
        if(token){
            res.status(200).json(new UserDTOToken(isLogin,token))
        }
        else{
            res.sendStatus(400)
        }
    }

}
module.exports = authController