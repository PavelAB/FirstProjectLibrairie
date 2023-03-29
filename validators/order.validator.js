const  yup = require("yup");


const createOrderValidator = yup.object({
    ID_Order: yup.string().trim().required(),
    orderDate: yup.date().required(),
    isPaid: yup.boolean(),
    book: yup.array(),
    UserIDUser: yup.number().nullable()

})
module.exports= createOrderValidator