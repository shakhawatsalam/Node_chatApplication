// external import
const express = require("express");
const { check } = require("express-validator");


// internal imports
const { getUsers } = require('../controller/userController.js');
const decoratehtmlResponse = require("../middleware/common/decoratehtmlResponse.js");
const avatarUpload = require("../middleware/users/avatarUpload.js");

const router = express.Router();
// users page
router.get('/', decoratehtmlResponse('Users'), getUsers);


// add user
router.post("/", avatarUpload, [
    check("name").isLength({ min: 1 }).withMessage("Name is required"),
    check("email").isEmail().withMessage("Invalid email address"),
]);
module.exports = router;