const {Sequelize,DataTypes}=require('sequelize')

/**
 * 
 * @param {Sequelize} sequelize 
 * @returns 
 */

module.exports = (sequelize)=>{
    const User = sequelize.define('User',{
        NationalRegist:{
            type:DataTypes.INTEGER,
            primaryKey:true
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
            defaultValue:'User'
        }

    },{
        tableName:'User'
    })
    return User
}