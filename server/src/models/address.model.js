const { Schema, model } = require('mongoose');


const addressSchema = new Schema({
    fullName: { type: String, required: true },
    mobile: { type: Number, required: true },
    streetAddress: { type: String, required: true },
    landmark: { type: String, required: false },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});


module.exports = model("address", addressSchema);