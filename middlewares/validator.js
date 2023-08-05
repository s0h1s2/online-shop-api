function validateSchema(schema){
    return function(req,res,next){
        console.log(req.body);
        const result=schema.validate(req.body);
        if(result.error){
            return res.status(400).send({error:result.error.details});
        }
        return next();
    }
}
module.exports.validateSchema=validateSchema;