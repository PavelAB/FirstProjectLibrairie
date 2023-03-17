const db = require("../models");

const genreService = {
    getAll:async()=>{
        const thisGenres = await db.Genres.findAll()
        //.findAll() --> une table des donnes
        if(thisGenres)
            return thisGenres
    },
    getById:async(id)=>{
        const thisGenre = await db.Genres.findByPk(id)
        if(thisGenre)
            return thisGenre
    },
    create:async(data)=>{
        const newGenre = await db.Genres.create(data)
        if(newGenre)
            return true
        else    
            return false
    },
    update:async(id,data)=>{
        const updateGenre = await db.Genres.update(data,{
            where:{
                ID_genres : id
            }
        })
        if(updateGenre[0]===1)
            return true
        else 
            return false
    },
    delete:async(id)=>{
        const deleteGenre = await db.Genres.destroy({
            where:{
                ID_genres:id
            }
        })
        if (deleteGenre===1)
            return true
        else 
            return false
    }
}

module.exports = genreService
