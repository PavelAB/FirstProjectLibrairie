const {Request,Response}=require('express')
const db = require('../models')
const {AuthorDTO}= require('../dto/authors.dto')






const authorService={
    getAll:async()=>{
        const test = await db.Author.findAll();
        if(test)
            return test
    },
    getByID:async(id)=>{
        const author = await db.Author.findByPk(id);
        if (author)
            return author
    },
    
    create: async (data) => {
        //methode create cree une nouvelle ligne dans ma bd author
        const newAuthor = await db.Author.create(data)
        if(newAuthor){
            return true
        }
        else return false
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