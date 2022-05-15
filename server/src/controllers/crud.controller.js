const { sortValue, getGender, getCategory } = require('../utils/extraFunctions');


const postItem = (model) => async (req, res) => {
    try {
        const item = await model.create({ ...req.body, user: req.user._id });

        return res.status(201).send(item);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const getAllItems = (model) => async (req, res) => {
    try {
        const item = await model.find({ user: req.user._id }).lean().exec();

        return res.status(201).send(item);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const getAllOrders = (model) => async (req, res) => {
    try {
        const item = await model.find({ user: req.user._id }).populate("address").lean().exec();

        return res.status(201).send(item);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const getOne = (model) => async (req, res) => {
    try {
        const item = await model.findById(req.params.id).lean().exec();

        return res.status(201).send(item);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const getAmount = (model) => async (req, res) => {
    try {
        const item = await model.findOne({ user: req.user._id }).lean().exec();

        return res.status(201).send(item);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const getAllPaginated = (model) => async (req, res) => {
    try {
        const page = +req.query.page || 1;

        const size = +req.query.limit || 6;

        const skilValues = ((page - 1) * size);

        const isGender = getGender(req.query.gender);

        const category = getCategory(req.query.category);

        const isSort = sortValue(req.query.sort);

        const item = await model.find({ $and: [{ $or: isGender }, { $or: category }] }).sort(isSort).skip(skilValues).limit(size).lean().exec();

        const totalProducts = await model.find({ $and: [{ $or: isGender }, { $or: category }] }).countDocuments()

        const totalPages = Math.ceil(totalProducts / size);

        return res.status(201).send({ item, totalPages, totalProducts });

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const deleteOne = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(201).send(item);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
}

const updateOne = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();

        return res.status(201).send(item);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
}

const updateCoupon = (model) => async (req, res) => {
    try {
        const coupon = await model.findOne({ couponCode: req.body.couponCode }).lean().exec();

        if (!coupon) {
            return res.status(400).json({ status: "Failed", message: "Invalid Coupon Code" });
        }

        const user = coupon.user.filter((e)=> e == req.user._id);

        if (!!user.length) {
            return res.status(400).json({ status: "Failed", message: "Already used this coupon" });
        }

        const item = await model.findByIdAndUpdate(coupon._id, { user: [...coupon.user, req.user._id] }, { new: true }).lean().exec();

        return res.status(201).json({ couponCode: item.couponCode, discountValue: item.discountValue });

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const removeCoupon = (model) => async (req, res) => {
    try {
        const coupon = await model.findOne({ couponCode: req.body.couponCode }).lean().exec();

        if (!coupon) {
            return res.status(400).json({ status: "Failed", message: "Invalid Coupon Code" });
        }

        const item = await model.findByIdAndUpdate(coupon._id, { user: coupon.user.filter((e)=> e != req.user._id) }, { new: true }).lean().exec();

        return res.status(201).json({ couponCode: item.couponCode, discountValue: item.discountValue });

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};


module.exports = {
    postItem,
    getAmount,
    getAllItems,
    getAllOrders,
    getAllPaginated,
    getOne,
    updateOne,
    deleteOne,
    updateCoupon,
    removeCoupon
};