const { Schema, model } = require("mongoose");

const reqArray = { type: Array, required: true };
const reqString = { type: String, required: true };
const reqNumber = { type: Number, required: true };

const productSchema = new Schema({
    img: reqArray,
    name: reqString,
    description: reqString,
    category: reqString,
    price: reqNumber,
    size: reqArray,
    rating: reqNumber,
    gender: reqString,
    brand: reqString,
    collections: reqString
}, {
    versionKey: false
});

module.exports = model("product", productSchema);

