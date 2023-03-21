
const { BookDTO } = require("../dto/books.dto");
const { Genres,Author,Orders } = require("../models");
const db = require("../models");

const BookServices = {
    getAll: async()=>{
        const {rows, count} = await db.Book.findAndCountAll({
            include:[Genres,Author,Orders],
            distinct:true
        }) 
        const books = rows.map(test=>new BookDTO(test))
        return{
            books,count
        }
    },
    getById:async(id)=>{
        const book = await db.Book.findByPk(id,{
            include:[Genres,Author,Orders]
        })
        if(book)
            return new BookDTO(book)
        
    },
    create:async(data)=>{
        //creer une transaction --> Permet de modifie un paquet d'information d'un seul coup, si il y une erreur tous les modification 
        const transaction = await db.sequelize.transaction()
        let book // creerla variable book
        try {
            book = await db.Book.create(data)
            await book.addGenres(data.genres,{transaction}) // data.genres doit correspondre a "genres" dans l'insomnia
            await book.addAuthor(data.authors,{transaction})
            await book.addOrder(data.orders,{transaction}) 
            await transaction.commit() // finir la transaction
            
        } catch (error) {
            console.log(error);
            await transaction.rollback()
            return null
        }
        
        if(book)
            return book

    },
    update:async(id,data)=>{
        console.log(id);
        console.log(data);
        const book = await db.Book.update(data,{
            where:{
                ISBN:id
            }
        })
        // je recois en retour de book un table, en premiere position --> nmbre de lignes affectes
        if(book[0]===1){
            return true}
        else
            return false
        
    },
    delete:async(id)=>{
        const book = await db.Book.destroy({
            where:{
                ISBN:id
            }
        
        })
        // je recois en retour 1 ou 0
        if(book===1)
            return true
        else 
            return false

    }

}
module.exports = BookServices 