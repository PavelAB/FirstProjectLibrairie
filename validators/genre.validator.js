const  yup  = require("yup");
const { Book } = require("../models");

const createGenreValidator = yup.object({
    name_genres: yup.string().max(50).trim().required(),
    Books: yup.array()
}) 
module.exports = createGenreValidator

