const { Schema, model } = require('mongoose');

const reqString = { type: String, required: true };
const reqNumber = { type: Number, required: true };

const orderSchema = new Schema({
    product: [{
        img: reqString,
        name: reqString,
        price: reqString,
        quantity: reqNumber,
        productId: reqString,
    }],
    amount: {
        discount: reqNumber,
        productCount: reqNumber,
        shippingCharges: reqNumber,
        totalMRP: reqNumber,
        payableAmount: reqNumber,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: "address",
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});


module.exports = model("order", orderSchema);