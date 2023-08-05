const Joi = require('joi');
const createStoreSchema = Joi.object({
    name: Joi.string()
        .required(),

    description: Joi.string().max(500),
    logo: Joi.optional()
});
module.exports.createStoreSchema = createStoreSchema;
