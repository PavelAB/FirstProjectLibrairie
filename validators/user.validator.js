const  yup  = require("yup");

const createUserValdator = yup.object({
    NationalRegist: yup.number(),
    login: yup.string().max(50).trim().required(),
    password: yup.string().max(100).trim().required(),
    firstname: yup.string().max(50).trim().required(),
    lastname: yup.string().max(50).trim().required(),
    birth_date:yup.date(), 
    role: yup.string().max(10).trim()

})
module.exports = createUserValdator 