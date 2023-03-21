const {GenreDTO} = require("../dto/genres.dto")
const { Book, User } = require("../models");
const db = require("../models");

const genreService = {
    getAll:async()=>{
        const {count, rows} = await db.Genres.findAndCountAll({
            distinct:true,
            include:[Book]
        })


        const tests = rows.map(test=>new GenreDTO(test))

        return{
            tests,count
        }
    },
    getById:async(id)=>{
        const thisGenre = await db.Genres.findByPk(id,{
            include:[Book] 
        })
        if(thisGenre)
            return new GenreDTO(thisGenre)
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
