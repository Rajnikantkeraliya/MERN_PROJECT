import mongoose, { Schema } from "mongoose";
import validator from "validator";


const messageschema = new mongoose.Schema({

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
    message: {
        type: String,
        required: true,
        minLength: [5, "message  Must Contain at Least 5 Characters"],
        trim: true
    },


}, { timestamps: true })


export const Message = mongoose.model("Message", messageschema)