const { Schema, model } = require('mongoose');

const amountSchema = new Schema({
    discount: { type: Number, required: true },
    productCount: { type: Number, required: true },
    shippingCharges: { type: Number, required: true },
    totalMRP: { type: Number, required: true },
    payableAmount: { type: Number, required: true },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model("amount", amountSchema);