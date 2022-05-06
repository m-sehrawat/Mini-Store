const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: { type: String, required: true }
});

module.exports = model("product", productSchema);