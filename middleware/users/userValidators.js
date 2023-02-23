// external import
const { check } = require("express-validator");
const createError = require("http-errors");


// internal imports
const User = require("../../models/People.js");


// add user
const addUserValidators = [
    check("name")
        .isLength({ min: 1 })
        .withMessage("Name is required")
        .isAlpha("en-US", { ignore: " -" })
        .withMessage("Name must not contain anything other than alphabet")
        .trim(),
    check("email")
        .isEmail()
        .withMessage("Invalid email address")
        .trim()
        .custom(async (value) => {
        try {
            const user = await User.findOne({ email: value });
            if (user) {
                throw createError("Email already is use!!");
            }
        } catch (error) {
            throw createError(err.message);
        }
    })
];


module.exports = {
    addUserValidators,
}