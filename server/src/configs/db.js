const { connect } = require('mongoose');
require('dotenv').config();

module.exports = () => {
    return connect(process.env.MONGO_PATH, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
}