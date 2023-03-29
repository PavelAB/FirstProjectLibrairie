const {AuthorForBook} = require('./authorBookDTO') // Attention a circular dependency
const {GenreForBook} =require('./genreBookDTO')
       

class BookForGenres{
    constructor({title,ISBN}){
        this.title = title
        this.ISBN = ISBN
    }
}

class BooKForOrders{
    constructor({title,price,ISBN}){
        this.title=title
        this.price=price
        this.ISBN=ISBN
    }
}
class BookDTO{
    constructor({ISBN,title,price,isSale,entry_date,Authors,Genres}){
        this.ISBN = ISBN
        this.title =title
        this.price = price
        this.isSale=isSale
        this.entry_date=entry_date
        this.Author = Authors? Authors.map(test=>new AuthorForBook(test)):[]
        this.Genres= Genres? Genres.map(test=>new GenreForBook(test)):[]
    }
}



module.exports = {
    BookForGenres, 
    BooKForOrders, 
    BookDTO
}
