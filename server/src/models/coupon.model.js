const { Schema, model } = require('mongoose');

const couponSchema = new Schema({
    couponCode: { type: String, required: true },
    discountValue: { type: Number, required: true },
    user: [{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: false
    }]
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model("coupon", couponSchema);
