import mongoose from "mongoose"
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userschema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name Must Contain at Least 3 Characters"],
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name Must Contain at Least 3 Characters"],
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: validator.isEmail,
            message: props => `${props.value} is not a valid email address!`
        }
    },
    phoneNumber: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                const phoneNumberString = value.toString();
                return validator.isMobilePhone(phoneNumberString, 'any', { strictMode: false }) && phoneNumberString.length >= 10;
            },
            message: `{VALUE} is not a valid phone number Plz Enter 10 Digit Number`
        }
    },
    nic: {
        type: String,
        required: true,
        minLength: [13, "Min Length Of NIC is 13"],
        maxLength: [13, "max Length Of NIC is 13"],
    },
    dob: {
        type: Date,
        required: [true, "Dob is Required"]
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Other"]
    },
    password: {
        type: String,
        required: true,
        Select: false,
        validate: {
            validator: function (value) {
                // Check if the first character is capitalized
                const firstCharIsCapital = /^[A-Z]/.test(value);
                // Check if the password meets the minimum and maximum length requirements
                const isLengthValid = validator.isLength(value, { min: 8, max: 16 });

                return firstCharIsCapital && isLengthValid;
            },
            message: 'Password must start with a capital letter and be between 8 and 20 characters long'
        }
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Patient", "Doctor"]
    },
    doctorDepartment: {
        type: String
    },
    docAvatar: {
        public_id: String,
        url: String
    }


}, { timestamps: true })


userschema.pre("save", async function () {
    if (!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userschema.methods.comparePassword = async function (enteredpassword) {
    return await bcrypt.compare(enteredpassword, this.password);
};


userschema.methods.generateJsonWebToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_TOKEN_EXPIRES })
}


export const User = mongoose.model("User", userschema)


