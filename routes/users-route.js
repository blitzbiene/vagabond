const User = require("../models/users.js");
const router = require("express").Router();
const userController = require('../controllers/userController/userController');



router.get('/',userController.getUsers);
router.post('/login',userController.logIn);
router.post('/signup',userController.signUp)



module.exports = router;

