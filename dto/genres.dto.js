const { BookForGenres } = require("./books.dto");


class GenreDTO{
    constructor({ID_genres,name_genres,Books})
    {
        this.id=ID_genres
        this.name_genres=name_genres
        this.Books = Books? Books.map(test=>new BookForGenres(test)):[]
    }
}

module.exports = {GenreDTO}