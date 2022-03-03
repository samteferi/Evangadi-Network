const router = require('express').Router();
const { createRegistrationTable } = require('./user.controller');

router.get("/", createRegistrationTable);

module.exports = router;