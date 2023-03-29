require('dotenv').config(); // Si j'ai des donnees dans un fichier .env, il faut importer ses donnees dans le debut de mon point d'entree
// https://www.npmjs.com/package/dotenv


//importe de l'express.
const express = require('express')
const cors= require('cors')
//creaton de l'instance express
const app = express() 

app.use(cors())

//absolument mettre avant le route car si non l'express n'est pas au courant de l'existance de objet json
app.use(express.json())

//j'importe mon objet db
const db = require ('./models')
const router = require('./routes')


//Je verifie si je suis bien connecter a ma BD.
db.sequelize.authenticate()
    .then(()=>console.log('Connection db successful'))
    .catch((err)=>console.log('Connection db failed',err))
if (process.env.NODE_ENV==='development'){
    //db.sequelize.sync({force:true})
    //db.sequelize.sync({alter:{drop:false}})
}

app.use('/api',router)   // .use(chemin,middleware)

//defini le port et lance notre app sur le port donner
app.listen(process.env.PORT, ()=>{
    console.log(`Server API started on port ${process.env.PORT}`);
})

