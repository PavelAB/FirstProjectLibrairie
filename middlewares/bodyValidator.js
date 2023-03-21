const { ObjectSchema } = require("yup");
const {Request,Response,NextFunction} = require('express')
/**
 * 
 * @param {ObjectSchema} yupValidator
 */
const bodyValidator =(yupValidator)=>{
    
    return async(req,res,next)=>{
    try {
            
            const isValid = await yupValidator.noUnknown().validate(req.body,{abortEarly:false})

            req.body=isValid

            next()
        }
    
    
    catch (error) {
        console.log(error);
        return res.status(400).json(error)
        
    }
    }
}
module.exports = bodyValidator