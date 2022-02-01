const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        validate: {
            validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email."
        }
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must be a minimum of 8 characters."]
    }
}, {timestamps: true});

//Virtual field for confirm password
UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value)

UserSchema.pre("validate", function(next){
    console.log("in validate");

    if(this.password !== this.confirmPassword){
        this.invalidate("confirmPassword", "Passwords must match.")
    };

    next()
});

//Hash the password before saved into database
UserSchema.pre("save", function(next){
    bcrypt.hash(this.password, 10)
    .then((hash) => {
        this.password = hash
        next()
    })
    .catch(err => {
        console.log(err);
    });
})

const User = mongoose.model("User", UserSchema);

module.exports = User;