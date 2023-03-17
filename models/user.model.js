const {Sequelize,DataTypes}=require('sequelize')

/**
 * 
 * @param {Sequelize} sequelize 
 * @returns 
 */

module.exports = (sequelize)=>{
    const User = sequelize.define('User',{
        ID_User:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        NationalRegist:{
            type:DataTypes.INTEGER,
            allowNull:true,
            default:null
        },
        login:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        password:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        firstname:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        lastname:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        birth_date:{
            type:DataTypes.DATE,
            allowNull:true
        },
        role:{
            type:DataTypes.STRING(50),
            allowNull:true,
            defaultValue:'User'
        }

    },{
        tableName:'User'
    })
    return User
}