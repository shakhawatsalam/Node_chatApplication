// external import
const express = require("express");


const { getLogin, login, logout } = require('../controller/loginController.js');
const decoratehtmlResponse = require("../middleware/common/decoratehtmlResponse.js");
const { doLoginValidator, doLoginValidatorHandler } = require("../middleware/login/loginValidator.js");
const { redirectLoggedIn } = require("../middleware/common/checkLogin.js");

const router = express.Router();


const page_title = "Login";
// login Page 
router.get('/', decoratehtmlResponse(page_title), redirectLoggedIn, getLogin);


// process login
router.post("/", decoratehtmlResponse(page_title), doLoginValidator, doLoginValidatorHandler, login);

// logout
router.delete('/', logout);



module.exports = router;