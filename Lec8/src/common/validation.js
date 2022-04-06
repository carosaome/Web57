const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(6).required()
});
const createPostSchema = Joi.object({
    title: Joi.string()
        .min(6)
        .max(100)
        .required(),
    description: Joi.string()
        .min(100)
        .max(200)
        .required(),
    imageUrl: Joi.string()
        .pattern(new RegExp('^http$'))
        .required(),
});




module.exports = {
    registerSchema,
    loginSchema,
    createPostSchema
} 