// external import
const express = require("express");


// internal imports
const { getUsers, addUser, removeUser } = require('../controller/userController.js');
const decoratehtmlResponse = require("../middleware/common/decoratehtmlResponse.js");
const avatarUpload = require("../middleware/users/avatarUpload.js");
const { addUserValidators, addUserValidationHandler } = require('../middleware/users/userValidators');

const router = express.Router();
// users page
router.get('/', decoratehtmlResponse('Users'), getUsers); 


// add user
router.post("/", avatarUpload, addUserValidators, addUserValidationHandler, addUser);


// remove user
router.delete('/:id', removeUser);


module.exports = router;