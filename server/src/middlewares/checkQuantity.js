const Cart = require('../models/cart.model');

const { renameObjectKey } = require('../utils/extraFunctions');


module.exports = async (req, res, next) => {
    try {
        const match = await Cart.find({ $and: [{ user: req.user._id }, { productId: req.body._id }] }).lean().exec();

        if (match.length !== 0) {

            const update = { quantity: match[0].quantity + 1 , price: match[0].price + req.body.price};

            const item = await Cart.findByIdAndUpdate(match[0]._id, update, { new: true }).lean().exec();

            return res.status(200).json(item);
        }

        renameObjectKey(req.body, "productId", "_id");


        return next();

    } catch (e) {
        return res.status(500).json({ status: "Failed", message: e.message });
    }

}