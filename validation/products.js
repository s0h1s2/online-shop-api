const Joi = require('joi');
const createProductSchema = Joi.object({
    name: Joi.string()
        .required(),

    description: Joi.string().max(500),
    price: Joi.number(),
    image: Joi.optional()
});
module.exports.createProductSchema = createProductSchema;
