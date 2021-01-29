 const router = require("express").Router();
const placeController = require("../controllers/placeController");

 router.get('/:pid',placeController.getPlaceById);
 router.get('/user/:uid',placeController.getPlaceByUserId);





 module.exports = router