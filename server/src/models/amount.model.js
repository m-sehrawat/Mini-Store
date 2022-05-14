const { Schema, model } = require('mongoose');

const reqNumber = { type: Number, required: true };

const amountSchema = new Schema({
    discount: reqNumber,
    productCount: reqNumber,
    shippingCharges: reqNumber,
    totalMRP: reqNumber,
    payableAmount: reqNumber,
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