
const {Sequelize,DataTypes,ModelStatic, INTEGER}=require('sequelize')    

//Je ne veux pas ecrire tout dans un seul fichier --> 
//Pour cela, il me faut des modules, mais pour avoir acces a ces fichiers depuis un autre, je dois les exporter


/**
 * 
 * @param {Sequelize} sequelize 
 * @returns 
 */
 
module.exports = (sequelize)=>{
    const Book = sequelize.define('Book',{
        ISBN:{
            type:INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        price:{
            type:DataTypes.DOUBLE,
            allowNull:false
        },
        entry_date:{
            type:DataTypes.DATE,
            allowNull:false
        },
        isSale:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        }
    },{
        tableName:'Book'
    })
    return Book
}