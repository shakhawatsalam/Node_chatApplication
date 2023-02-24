// external import
const express = require("express");


const { getLogin, login } = require('../controller/loginController.js');
const decoratehtmlResponse = require("../middleware/common/decoratehtmlResponse.js");
const { doLoginValidator, doLoginValidatorHandler } = require("../middleware/login/loginValidator.js");

const router = express.Router();


const page_title = "Login";
// login Page 
router.get('/', decoratehtmlResponse(page_title), getLogin);


// process login
router.post("/", decoratehtmlResponse(page_title), doLoginValidator, doLoginValidatorHandler, login);



module.exports = router;