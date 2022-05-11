const { Schema, model } = require('mongoose');

const favouriteSchema = new Schema({
    img: { type: Array, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Array, required: true },
    rating: { type: Number, required: true },
    gender: { type: String, required: true },
    brand: { type: String, required: true },
    collections: { type: String, required: true },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model("favourite", favouriteSchema);