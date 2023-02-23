// external import
const express = require("express");

const router = express.Router();
const { getUsers } = require('../controller/userController.js');


// login Page 
router.get('/', getUsers);

module.exports = router;