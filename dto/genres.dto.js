const { BookForGenres } = require("./books.dto")


class GenreDTO{
    constructor({name_genres,Books})
    {
        this.name_genres=name_genres
        try {
            this.Books=Books? Books.map(test=>new BookForGenres(test)):[]
            
        } catch (error) {
            console.log(error);
            this.Books=Books
        }
    }
}
class GenreForBook{
    constructor({name_genres}){
        this.name_genres=name_genres
    }
}
module.exports={GenreDTO,GenreForBook}