const yup = require('yup')

const createAuthorValidator=yup.object({
    lastname:yup.string().max(50).trim().required(),
    firstname:yup.string().max(50).trim().required(),
    pseudo:yup.string().max(50).trim(),
    birth_date: yup.date(),
    death_date: yup.date(),
    Books: yup.array()
})
module.exports = createAuthorValidator 