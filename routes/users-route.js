const User = require("../models/users.js");
const router = require("express").Router();
const userController = require('../controllers/userController.js');

router.get('/',userController.getUsers);



module.exports = router;

