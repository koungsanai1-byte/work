const express = require('express');
const users = require("../Controller/user");
const router = express.Router();

router.put("/create", users.create);
router.get("/list", users.list);

module.exports = router;