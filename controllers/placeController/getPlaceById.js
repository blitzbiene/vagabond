const Place = require("../../models/places");

module.exports = async (req, res, next) => {
    try {
        const pid = req.params.pid;
        const place = await Place.findOne({ _id: pid });
        res.json(place);
    }
    catch (err) {
        return res.status(500).json({ msg: err.message });
    }
    //res.send(req.params.pid);
}