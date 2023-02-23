// external import
const express = require("express");

const router = express.Router();
const { getInbox } = require('../controller/inboxController.js');
const decoratehtmlResponse = require("../middleware/common/decoratehtmlResponse.js");

// inbox Page 
router.get('/', decoratehtmlResponse('Inbox'), getInbox);

module.exports = router;