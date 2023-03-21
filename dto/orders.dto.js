const { BooKForOrders } = require("./books.dto")
const { UserDTOForOrders } = require("./user.dto")

class OrdersDTO{
    constructor({ID_Order,orderDate,isPaid,UserIDUser,Books}){
        this.ID_Order=ID_Order
        this.orderDate=orderDate,
        this.isPaid=isPaid,
        //this.UserIDUser=UserIDUser? new UserDTOForOrders(UserIDUser):null //====>>ne fonction pas
        this.UserIDUser=UserIDUser 
        this.book=Books? Books.map(test=>new BooKForOrders(test)):[]
    }
}
module.exports={OrdersDTO}