import { CatchAsyncError } from "../Middleware/CatchAsyncError.middleware.js"
import { errorHandler } from "../Middleware/Error.middleware.js"
import { User } from "../Models/Userschema.model.js";
import { generateToken } from "../Utils/Jwt.token.js";

export const patientRegister = CatchAsyncError(async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        gender,
        dob,
        nic,
        role
    } = req.body;

    if (
        !firstName || !lastName || !email || !phoneNumber || !password || !gender || !dob || !nic || !role
    ) {
        return next(new errorHandler("Plz Fill Full Form!", 400))
    }
    let user = await User.findOne({ email })

    if (user) {
        return next(new errorHandler("User Already Registred", 400))
    }
    user = await User.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        gender,
        dob,
        nic,
        role
    });

    generateToken(user, "User Registred!", 200, res)
})

export const login = CatchAsyncError(async (req, res, next) => {
    const { email, password, confirmPassword, role } = req.body;

    if (!email || !password || !confirmPassword || !role) {
        return next(new errorHandler("Plz provide All Details", 400))
    }
    if (password !== confirmPassword) {
        return next(new errorHandler("Password And Confirm password not match", 400))
    }
    const user = await User.findOne({ email }).select("+password")

    if (!user) {
        return next(new errorHandler("Invalid Email or Password", 400))
    }

    const ispasswordmatch = await user.comparePassword(password);
    if (!ispasswordmatch) {
        return next(new errorHandler("Invalid Email or Password", 400))
    }


    if (role !== user.role) {
        return next(new errorHandler("User With This Role Not Found", 400))
    }
    generateToken(user, "User logged In Successfully!", 200, res)
})


export const addNewAdmin = CatchAsyncError(async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        gender,
        dob,
        nic,
    } = req.body;
    if (
        !firstName || !lastName || !email || !phoneNumber || !password || !gender || !dob || !nic
    ) {
        return next(new errorHandler("Plz Fill Full Form!", 400))
    }
    const isRegistred = await User.findOne({ email })

    if (isRegistred) {
        return next(new errorHandler(`${isRegistred.role} With This Email Already Registred`, 400))
    }

    const admin = await User.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        gender,
        dob,
        nic,
        role: "Admin"
    });
    res.status(200).json({
        success: true,
        message: "new Admin Registred"
    })
})