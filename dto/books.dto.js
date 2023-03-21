const {AuthorForBook} = require('./authors.dto');
       
const { GenreForBook } = require("./genres.dto");


class BookForGenres{
    constructor({title}){
        this.title = title
    }
}

class BooKForOrders{
    constructor({title,price}){
        this.title=title
        this.price=price
    }
}
class BookDTO{
    constructor({ISBN,title,price,isSale,entry_date,Authors,Genres}){
        this.ISBN = ISBN
        this.title =title
        this.price = price
        this.isSale=isSale
        this.entry_date=entry_date
        try {
            
            console.log(Authors);
            const tests = Authors? Authors.map(test=>new AuthorForBook(test)):[]
            console.log(tests);
        } catch (error) {
            console.log(error);
            this.Authors=Authors
        }
        this.Genres= Genres? Genres.map(test=>new GenreForBook(test)):[]

    }
}

module.exports = {BookForGenres, BooKForOrders, BookDTO}