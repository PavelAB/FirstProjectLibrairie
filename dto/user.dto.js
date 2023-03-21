class UserDTOToken{ 
    constructor({firstname,lastname,birth_date},token)
    {
        this.firstname = firstname,
        this.lastname = lastname,
        this.birth_date = birth_date,
        this.token= token
    }
}
class UserDTO{
    constructor({ID_User,firstname,lastname,birth_date,role})
    {
        this.id=ID_User
        this.firstname=firstname
        this.lastname=lastname
        this.birth_date=birth_date
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