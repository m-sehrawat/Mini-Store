const Favourite = require("../models/favourite.model")

module.exports = async (req, res, next) => {

    const match = await Favourite.find({ $and: [{ user: req.user._id }, { name: req.body.name }] }).count().lean().exec();

    if(!!match){
        return res.status(400).json({status: "Failed", message: "Already present in the Favourite"});
    }

    return next();
}

 