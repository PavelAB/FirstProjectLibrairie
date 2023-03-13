const {Sequelize, ModelStatic, DataTypes} = require("sequelize");

//Dans le fichier auteur.module.js je definie simplememnt mes colonnes --> les noms et toutes les proprietes des colonnes. La connexion se fait dans le fichier index.js  

/**
 * 
 * @param {Sequelize} sequelize 
 * @returns 
 */


module.exports = (sequelize) =>{
    const Author = sequelize.define('Author',{
        //les noms de colonnes,avec leurs descriptions
        ID_Author:{
            type:DataTypes.STRING(50),
            primaryKey:true
        },
        lastname:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        firstname:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        pseudo:{
            type:DataTypes.STRING(50),
            allowNull:true
        },
        birth_date:{
            type:DataTypes.DATE,
            allowNull:true
        },
        death_date:{
            type:DataTypes.DATE,
            allowNull:true
        }
    },{
        tableName:'Author'
    })
    return Author;
}
