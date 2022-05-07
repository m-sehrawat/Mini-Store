const { sortValue, getGender } = require('../utils/extraFunctions');


const post = (model) => async (req, res) => {
    try {
        const item = await model.create(req.body);

        return res.status(201).send(item);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const getAll = (model) => async (req, res) => {
    try {
        const item = await model.find().lean().exec();

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

const getAllPaginated = (model) => async (req, res) => {
    try {
        const page = +req.query.page || 1;

        const size = +req.query.limit || 6;

        const skilValues = ((page - 1) * size);

        const isGender = getGender(req.query.gender);

        const isSort = sortValue(req.query.sort);

        const item = await model.find({ $or: isGender }).sort(isSort).skip(skilValues).limit(size).lean().exec();

        const totalPages = Math.ceil(await model.find({ $or: isGender }).countDocuments() / size);

        return res.status(201).send({ item, totalPages });

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};


module.exports = { post, getAll, getAllPaginated, getOne };