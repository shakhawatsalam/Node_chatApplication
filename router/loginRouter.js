// external import
const express = require("express");

const router = express.Router();
const { getLogin } = require('../controller/loginController.js');
const decoratehtmlResponse = require("../middleware/common/decoratehtmlResponse.js");

// login Page 
router.get('/', decoratehtmlResponse('Login'), getLogin);

module.exports = router;