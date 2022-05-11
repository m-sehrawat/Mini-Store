const { Schema, model } = require('mongoose');

const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: { type: String, required: true },
    mobile: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});


userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    bcrypt.hash(this.password, 8, (err, hash) => {
        this.password = hash;
        return next();
    });
});

userSchema.methods.checkPassword = async function (password) {
    return bcrypt.compare(password, this.password).then((res) => res);
}


module.exports = model("user", userSchema);