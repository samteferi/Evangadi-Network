const router = require('express').Router();
const { createUser } = require('./user.controller');

router.get("/", createUser);

module.exports = router;