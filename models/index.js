const {Sequelize} = require ('sequelize')


const {DB_SERVER, DB_DATABASE, DB_USERNAME, DB_PASSWORD} = process.env;
// 2eme ligne je recupere toute les donnes de mon fichier .env grace a la commande process (voir doc)
//je cree mon connection a la base de donne en precisant le dialect de ma base de donnes 

//Ici j'ai defini une instance de Sequelize pour se connecter a ma base de donnes pour ca j'aurai besoin de connaitre le Nom de db, username,password,host,et le type de db
//Toute les info se trouve sur le doc de Sequelize
const sequelize = new Sequelize(DB_DATABASE,DB_USERNAME,DB_PASSWORD,{
    host:DB_SERVER,
    dialect:'mssql'
})


// Vu que j'ai besoin plusieurs table je cree un objet db, et je stocke toute l'information sur le db dedans.


const db={}
db.sequelize=sequelize;

db.Author= require('./author.model')(sequelize)
db.Book=require('./books.model')(sequelize)
db.User=require('./user.model')(sequelize)
db.Orders=require('./orders.model')(sequelize)

//Many-to-Many
db.Book.belongsToMany(db.Author,{through:'MM_Book_Author'})
db.Author.belongsToMany(db.Book,{through:'MM_Book_Author'})

db.Book.belongsToMany(db.Orders,{through:'MM_Book_Orders'})
db.Orders.belongsToMany(db.Book,{through:'MM_Book_Orders'})

//One-to-Many

db.User.hasMany(db.Orders)
db.Orders.belongsTo(db.User)

module.exports=db;