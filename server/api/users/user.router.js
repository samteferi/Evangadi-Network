const router = require('express').Router();
const { createUser, getUsers, getUserById } = require('./user.controller');

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);

module.exports = router;