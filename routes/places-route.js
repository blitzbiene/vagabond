const router = require("express").Router();
const multer = require("multer");
const placeController = require("../controllers/placeController");
const auth = require("../middlewares/auth");
const upload = multer({dest:"uploads/"});

 router.get('/:pid',placeController.getPlaceById);
 router.get('/user/:uid',placeController.getPlaceByUserId);
 router.use(auth);
 router.post('/',placeController.checkUser,upload.single('image'),placeController.createPlace);






 module.exports = router