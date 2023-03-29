
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
            console.log(data);
            book = await db.Book.create(data)

            await book.addGenres(data.genres,{transaction}) // data.genres doit correspondre a "genres" dans l'insomnia
            await book.addAuthors(data.Author,{transaction})
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
        const transaction = await db.sequelize.transaction()
        let updateBook
        try {
            updateBook = await db.Book.update(data,{
                where:{
                    ISBN:id
                },
                include:[Author,Genres]
            })
            const isBookToUpdate = await db.Book.findByPk(id,{
                include:[Author,Genres]
            })
            console.log("isBookToUpdate",isBookToUpdate);
            console.log(data.Author);
            console.log(data.genres);
            await isBookToUpdate.addAuthors(data.Author,{transaction})
            await isBookToUpdate.addGenres(data.genres,{transaction})
            await transaction.commit()

            
        } catch (error) {
            console.log(error);
            await transaction.rollback()
            return false
        }
        // je recois en retour de book un table, en premiere position --> nmbre de lignes affectes
        return true
        
    },
    deleteGenreInBook:async(id,data)=>{
        const transaction = await db.sequelize.transaction()
        try {
            const isBookToUpdate = await db.Book.findByPk(id,{
                include:[Genres] 
            })
            console.log(isBookToUpdate);

            console.log(data);
            await isBookToUpdate.removeGenres(data,{transaction})
            await transaction.commit()
            
        } catch (error) {
            console.log(error);
            await transaction.rollback()
            return false
        }
        return true
    },
    deleteAuthorInBook:async(id,data)=>{
        const transaction = await db.sequelize.transaction()
        try {
            const isBookToUpdate = await db.Book.findByPk(id,{
                include:[Author] 
            })
            console.log(isBookToUpdate);

            console.log(data);
            await isBookToUpdate.removeAuthors(data,{transaction})
            await transaction.commit()
            
        } catch (error) {
            console.log(error);
            await transaction.rollback()
            return false
        }
        return true
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