const { BookForGenres } = require("./books.dto")

class AuthorsDTO{
    constructor({firstname,lastname,Books}){
        this.firstname=firstname
        this.lastname=lastname
        this.Books = Books? Books.map(test=>new BookForGenres(test)):[]
    }
    
}
class AuthorForBook{
    constructor({lastname,firstname}){
        this.lastname=lastname
        this.firstname=firstname
    }
}

module.exports = {AuthorsDTO, AuthorForBook}

