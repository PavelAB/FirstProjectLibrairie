const { Request,Response,NextFunction } = require("express");
const jwt = require("../utils/jwt.utils");

//Je veux limiter acces, pour ca je peux utiliser token dans lequelle j'ai l'information sur role de la personne connecte



const authRoles =(role)=> {
/**
 * 
 * @param {Request} req
 * @param {Response} res 
 * @returns
 */   
    return async(req,res,next)=>{  //pq return
        const bearerToken = req.headers.authorization
        //console.log(`bearerToken --------->>> ${bearerToken}`);
        const token = bearerToken ? bearerToken?.split(" ")[1]:null
        //console.log(`token ------>>${token}`);
        if(!token || token === "" || token === null)
            {
                res.status(400).json("Pas de token")
                return
            }

        const payload = await jwt.decode(token)
        
        if(role !== payload.role && payload.role !== "Admin"){ //Verifie si admin,user
            res.status(401).json("Acces interdit")
            return
        }

        //Si j'ai deux User il faut tester les id



        //console.log(payload);



        next()  
    }
}
module.exports = authRoles