const Place = require("../../models/places");
const myValidators = require("../../utils/myValidators");

const createPlace = async (req, res, next) => {
    console.log(req.user);
    console.log(req.body);
    console.log(req.file);
    try {
        const { title, description, image, address, location, creator } = req.body;
        const place = new Place({
            title,
            description,
            image,
            address,
            location,
            creator
        });
        const newPlace = await place.save();
        res.status(201).send(newPlace);
    }
    catch (err) {
        res.status(404).json({ msg: err.message });
    }

}
module.exports = createPlace;




