const { Sequelize,DataTypes, INTEGER } = require('sequelize')

/**
 * 
 * @param {Sequelize} sequelize 
 */


module.exports = (sequelize)=>{
    const Genres = sequelize.define('Genres',{
        ID_genres:{ 
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name_genres:{
            type:DataTypes.STRING(50),
            allowNull:false
        }

    },{
        tableName: 'Genres'
    })
    return Genres
}