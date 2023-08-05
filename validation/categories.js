const Joi = require('joi');
const createCategorySchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().max(500),
    image: Joi.optional()
});
module.exports.createCategorySchema = createCategorySchema;
