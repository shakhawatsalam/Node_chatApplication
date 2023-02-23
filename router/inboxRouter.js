// external import
const express = require("express");

const router = express.Router();
const { getInbox } = require('../controller/inboxController.js');


// inbox Page 
router.get('/', getInbox);

module.exports = router;