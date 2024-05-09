import Mongoose from "mongoose";
import validator from "validator";

const appointmentschema = new Mongoose.Schema({
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
    appointment_date:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    doctor:{
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
    },
    hasvisited:{
        type: Boolean,
        required:true,
        default:false
    },
    doctorId:{
        type:Mongoose.Schema.ObjectId,
        required:true
    },
    patientid:{
        type:Mongoose.Schema.ObjectId,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending" , "Accepted","Rejected"]
    }

}, { timestamps: true })

export const Appointment = Mongoose.model("Appointment",appointmentschema)