const User = require("../models/users.js");
const router = require("express").Router();
const userController = require('../controllers/userController/userController');
const uploadPhoto = require('../middlewares/uploadPhoto');
const getFormDataForSignup = require("../middlewares/getFormDataForSignup") 
router.get('/',userController.getUserById)
router.get('/all',userController.getUsers);
router.post('/login',userController.logIn);
router.post('/signup',uploadPhoto.single('image'),getFormDataForSignup,userController.signUp)



module.exports = router;

