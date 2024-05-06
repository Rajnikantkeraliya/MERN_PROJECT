import mongoose from "mongoose";

const userscheema = mongoose.Schema({

    fullname: {
        typeof: String,
        required: true
    },
    emil: {
        typeof: String,
        required: true,
        unique: true
    },
    password: {
        typeof: String,
        required: true,
        unique: true
    }
})

const users = mongoose.model("Users", userscheema)

export default users