const { BookForGenres } = require("./books.dto")

class AuthorsDTO{
    constructor({ID_Author,firstname,lastname,birth_date,Books}){
        this.ID_Author=ID_Author
        this.firstname=firstname
        this.lastname=lastname
        this.birth_date=birth_date
        this.Books = Books? Books.map(test=>new BookForGenres(test)):[]
    }
    
}


module.exports = {AuthorsDTO}

