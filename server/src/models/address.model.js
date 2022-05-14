const { Schema, model } = require('mongoose');

const reqString = {type: String, required: true};
const reqNumber = {type: Number, required: true};


const addressSchema = new Schema({
    fullName: reqString,
    mobile: reqNumber,
    streetAddress: reqString,
    landmark: { type: String, required: false },
    city: reqString,
    state: reqString,
    pincode: reqNumber,
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