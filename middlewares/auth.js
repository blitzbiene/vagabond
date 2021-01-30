const myjwt = require("../utils/myjwt");

const authChecker = (req, res, next) => {

    
    try {
       console.log(req.headers);
        const token = req.headers.authorization.split(' ')[1];
        const user = myjwt.checkToken(token);
        req.user = user;
        next();


    }
    catch (err) {
        console.log(err.message);
        return res.status(404).json({ msg: "Auth Error" });
    }

}


module.exports = authChecker;