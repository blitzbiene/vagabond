const router = require("express").Router();
const multer = require("multer");
const placeController = require("../controllers/placeController");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/uploadPhoto");

 router.get('/:pid',placeController.getPlaceById);
 router.get('/user/:uid',placeController.getPlaceByUserId);
 router.use(auth);
 router.post('/',upload.single('image'),placeController.checkUser,placeController.createPlace);
 router.delete('/:pid',placeController.deletePlace);






 module.exports = router