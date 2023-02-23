// external import
const express = require("express");

const router = express.Router();
const { getUsers } = require('../controller/userController.js');
const decoratehtmlResponse = require("../middleware/common/decoratehtmlResponse.js");

// login Page 
router.get('/', decoratehtmlResponse('Users'), getUsers);

module.exports = router;