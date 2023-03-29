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
        console.log(newUser);
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
        console.log("coucou");
        const {login,password} = req.body
        const isLogin = await authService.login(login,password)
        console.log(isLogin);
        if(!isLogin){
            res.sendStatus(401)
            return
        }
        console.log(`ID======>>>>${isLogin.ID_User}`)
        console.log(`ID======>>>>${isLogin.role}`)
        const token = await jwt.generate(isLogin)
        console.log("====TOKEN==>>>"+token);
        const test = new UserDTOToken(isLogin,token)
        console.log(test);
        
        if(token){
            res.status(200).json(test)
        }
        else{
            res.sendStatus(400)
        }
    }

}
module.exports = authController