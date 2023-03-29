const jsonwebtoken =require('jsonwebtoken') // Je cree l'instance de jsonwebtoken. POur genrere le token j'aurai besoin le code hashage, le temps d'expiration et l'information par qui le token est cree et pour qui il est cree
// vaut mieux de stocker cette info dans le fichier .env
const { JWT_SECRET, JWT_ISSUER, JWT_AUDIENCE }=process.env

const jwt ={
    //Dans le token je veux stocker l'info par qui est genere ce token (id), role de user (role)


    generate: ({ID_User,role})=>{
        console.log(ID_User);
        //je cree mon token dans une PROMISE ---> revoir pq je fais ca
        //fonction qui recois en parametre le id et role et stocek cette information dans ke token
        return new Promise((resolve,reject)=>{
            //Simple variables ou je stocke les donnes que j'ai besoin
            const payload = {id : ID_User,role}
            const secret = JWT_SECRET  
            const options = {
                algorithm :"HS256",
                expiresIn : "365d",
                audience : JWT_AUDIENCE, // audience et issuer n'est pas vraiment neccesaire, une protection en plus si il y a plusieurs token qui viennent de differents sites 
                issuer : JWT_ISSUER

            }
            jsonwebtoken.sign(payload,secret,options,(error,token)=>{
                //console.log(payload);
                //Si l'error existe j'arrete la procedure
                if(error)
                    reject(error)
                resolve(token)
                
            })
        })
        

    },
    decode:(token)=>{  //permet de recuperr l'information que contient le token (payload)
        if(!token || token==="") // si token existe ou si il est null
            return Promise.reject("Pas de token")

        return new Promise((resolve,reject)=>{ //j'utilise le Promise ---> toujours pas compris pq
            const options = { // aucune idee a quoi sert le audience et issuer
                audience:JWT_AUDIENCE,
                issuer:JWT_ISSUER
            }
            jsonwebtoken.verify(token,JWT_SECRET,options,(error,payload)=>{ //je recupere le payload de mon token
                if(error){
                    reject (error)
                }
                    console.log(payload);
                    resolve (payload)
            })
        })

    }
}
module.exports = jwt