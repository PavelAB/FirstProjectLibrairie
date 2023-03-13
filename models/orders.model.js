const { Sequelize, DataTypes } = require("sequelize");

/**
 * 
 * @param {Sequelize} sequelize 
 */

module.exports = (sequelize)=>{
    const Orders = sequelize.define('Orders',{
        ID_Order:{
            type:DataTypes.STRING(50),
            primaryKey:true
        },
        orderDate:{
            type:DataTypes.DATE,
            allowNull:false
        },
        isPaid:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        }
    },{
        tableName:'Orders'
    })
    return Orders
}