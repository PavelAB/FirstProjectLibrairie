    class UserDTOToken{ 
    constructor({ID_User,role},token)
    {
        this.ID_User = ID_User,
        this.role = role,
        this.token= token
    }
}
class UserDTO{
    constructor({ID_User,firstname,lastname,birth_date,login,role,Orders})
    {
        this.ID_User=ID_User
        this.firstname=firstname
        this.lastname=lastname
        this.login=login
        this.role=role
        this.birth_date=birth_date
        this.Orders= Orders
    }
}
class UserDTOForOrders{
    constructor({ID_User,firstname})
    {
        this.id=ID_User
        this.firstname=firstname

    }
}
module.exports = {UserDTOToken,UserDTO,UserDTOForOrders}