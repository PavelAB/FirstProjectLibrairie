require('dotenv').config(); // Si j'ai des donnees dans un fichier .env, il faut importer ses donnees dans le debut de mon point d'entree
// https://www.npmjs.com/package/dotenv



//j'importe mon objet db
const db = require ('./models') 


//Je verifie si je suis bien connecter a ma BD.
db.sequelize.authenticate()
    .then(()=>console.log('Connection db successful'))
    .catch((err)=>console.log('Connection db failed',err))
if (process.env.NODE_ENV==='development'){
    //db.sequelize.sync({force:true})
    //db.sequelize.sync({alter:{drop:false}})
}



