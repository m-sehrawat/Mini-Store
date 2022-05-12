const Favourite = require("../models/favourite.model");

const { renameObjectKey } = require("../utils/extraFunctions");


module.exports = async (req, res, next) => {

    const match = await Favourite.find({ $and: [{ user: req.user._id }, { productId: req.body._id }] }).count().lean().exec();

    if(!!match){
        return res.status(400).json({status: "Failed", message: "Already present in the Favourite"});
    }

    renameObjectKey(req.body, "productId", "_id");

    return next();
}

 