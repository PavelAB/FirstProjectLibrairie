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
        const transaction = await db.sequelize.transaction()
        let genre
        try {
            genre = await db.Genres.create(data)
            console.log(genre);
            await genre.addBook(data.Books,transaction)
            await transaction.commit()
        } catch (error) {
            console.log(error);
            await transaction.rollback()
            return false            
        }
        if(genre)
            return true
    },
    update:async(id,data)=>{
        console.log("coucou im here");
        const transaction = await db.sequelize.transaction()
        let updateGenre
        try {
            updateGenre = await db.Genres.update(data,{
                where:{
                    ID_genres : id
                },
                include:[Book]
            })
            const isGenreToUpdate = await db.Genres.findByPk(id,{
                include:[Book] 
            })
            console.log(isGenreToUpdate);

            console.log(data.Books);
            await isGenreToUpdate.addBook(data.Books,{transaction})
            await transaction.commit()
            console.log("tout est ok");
        } catch (error) {
            console.log(error);
            await transaction.rollback()
            return false
        }
        return true
    },
    updateBookInGenre:async(id,data)=>{
        const transaction = await db.sequelize.transaction()
        try {
            const isGenreToUpdate = await db.Genres.findByPk(id,{
                include:[Book] 
            })
            console.log(isGenreToUpdate);

            console.log(data);
            await isGenreToUpdate.removeBook(data,{transaction})
            await transaction.commit()
            
        } catch (error) {
            console.log(error);
            await transaction.rollback()
            return false
        }
        return true
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
