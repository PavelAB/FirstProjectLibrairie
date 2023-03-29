const yup = require('yup')


const createBookValidator = yup.object({
    title : yup.string().max(50).trim().required(),
    price : yup.number().positive().required(),
    entry_date: yup.date().required(),
    isSale: yup.boolean(),
    genres: yup.array(),
    Author: yup.array()

})
const createBookValidatorForAuthor = yup.object({
    Author: yup.array()
})
const createBookValidatorForGenres = yup.object({
    genres: yup.array()
})
module.exports=[createBookValidator,createBookValidatorForAuthor,createBookValidatorForGenres]