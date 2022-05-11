const User = require("../models/user.model");

require('dotenv').config();

const jwt = require('jsonwebtoken');

const createToken = (user) => {
    return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};


const Signup = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec();

        if (user) {
            return res.status(400).json({ status: "failed", message: "Please provide different email id" });
        }

        user = await User.create(req.body);

        const token = createToken(user);

        return res.status(201).json({ user, token });

    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
}


const Login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(400).json({ status: "failed", message: "Please check your email and password" });
        }

        const match = await user.checkPassword(req.body.password);

        if (!match) {
            return res.status(400).json({ status: "failed", message: "Please check your email and password" });
        }

        const token = createToken(user);

        return res.status(201).json({ user, token });

    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
};


module.exports = { Signup, Login };