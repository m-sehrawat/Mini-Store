const jwt = require('jsonwebtoken');

require('dotenv').config();

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_ACCESS_KEY);
}


module.exports = (req, res, next) => {

    const bearerToken = req?.headers?.authorization;

    if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
        return res.status(400).json({ status: "Failed", message: "Please provide a valid token" });
    }

    const token = bearerToken.split(" ")[1];

    let user;
    try {
        user = verifyToken(token);
    } catch (err) {
        return res.status(400).json({ status: "Failed", message: "Please provide a valid token" });
    }

    if (!user) {
        return res.status(400).json({ status: "Failed", message: "User not found" });
    }

    req.user = user.user;

    return next();
}

