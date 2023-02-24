// external import
const express = require("express");

const router = express.Router();
const { getInbox } = require('../controller/inboxController.js');
const decoratehtmlResponse = require("../middleware/common/decoratehtmlResponse.js");
const { checkLogin } = require("../middleware/common/checkLogin.js");
// inbox Page 
router.get('/', decoratehtmlResponse('Inbox'), checkLogin, getInbox);

module.exports = router;