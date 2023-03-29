const {Request,Response}=require('express')
const db = require('../models')
const {AuthorsDTO}= require('../dto/authors.dto');
const { Book } = require('../models');
const jwt = require('../utils/jwt.utils');







const authorService={
    getAll:async()=>{
        const {rows,count} = await db.Author.findAndCountAll({
            include:[Book],
            distinct:true

        })
        const authors = rows.map(test=>new AuthorsDTO(test))
        return{
            authors,count
        }
    },
    getByID:async(id)=>{
        const author = await db.Author.findByPk(id,{
            include:[Book]
        });
        return author? new AuthorsDTO(author) : null;
    },
    
    create: async (data) => {

        const transaction = await db.sequelize.transaction()
        let newAuthor

        try {
            newAuthor = await db.Author.create(data)
            await newAuthor.addBook(data.Books,transaction)
            await transaction.commit()
            
        } catch (error) {
            console.log(error)
            await transaction.rollback()
            return false
        }
        if(newAuthor){
            return true
        }
        else 
            return false
    },
    update: async (id,data)=>{
        const isUpdate = await db.Author.update(data,{
            where:{
                ID_Author:id
            }
        })
        if (isUpdate)
        { return true}
        else return false
    },
    delete: async (id)=>{
        const isdeleted = await db.Author.destroy({
            where:{
                ID_Author:id
            }
        })
    } 
}



module.exports = authorService  