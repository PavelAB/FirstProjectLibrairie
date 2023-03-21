const yup = require('yup')


const createBookValidator = yup.object({
    title : yup.string().max(50).trim().required(),
    price : yup.number().positive().required(),
    entry_date: yup.date().required(),
    isSale: yup.boolean()

})
module.exports=createBookValidator