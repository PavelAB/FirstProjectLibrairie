const {Request,Response,NextFunction}= require('express');
const jwt = require('../utils/jwt.utils');


const authUserId = ()=>{
    /**
     * @param {Request} req
     * @param {Response} res
     */
    return async (req,res,next)=>{
        const bearerToken = req.headers.authorization
        //console.log(bearerToken);
        const token = bearerToken? bearerToken?.split(" ")[1] : null
        //console.log(token);
        
        const payload = await jwt.decode(token)

        const id = req.params.id
        // console.log("ID===>>"+id);  ====>> Poser le question
        // if(id!=payload.id)
        // {
        //     console.log(`${id} !== ${payload.id}`);
        //     console.log("yep");
        // }
        if(payload.role !=="Admin" && id!=payload.id)
            {
                res.status(401).json("Acces Interdit")
                return
            }
        


        next()
    }
}
module.exports = authUserId