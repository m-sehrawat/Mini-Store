const Amount = require('../models/amount.model');


module.exports = async (req, res, next) => {
    try {
        const match = await Amount.findOne({ user: req.user._id }).lean().exec();

        if (match) {

            const item = await Amount.findByIdAndUpdate(match._id, req.body, { new: true }).lean().exec();

            return res.status(200).json(item);
        }

        return next();

    } catch (e) {
        return res.status(500).json({ status: "Failed", message: e.message });
    }
}