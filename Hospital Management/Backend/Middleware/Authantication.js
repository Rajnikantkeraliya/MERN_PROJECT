import { User } from "../Models/Userschema.model.js";
import { CatchAsyncError } from "./CatchAsyncError.middleware.js";
import { errorHandler } from "./Error.middleware.js";
import jwt from "jsonwebtoken"

export const isAdminAuthanticated = CatchAsyncError(async (req, res, next) => {
    const token = req.cookies.adminToken;
    if (!token) {
        return next(new errorHandler("Admin Not Authenticated", 400))
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if (req.user.role !== "Admin") {
        return next(new errorHandler(`${req.user.role} Not Authorised For this Resources !`, 403))
    }
    next()
})
export const isPatientAuthanticated = CatchAsyncError(async (req, res, next) => {
    const token = req.cookies.patientToken;
    if (!token) {
        return next(new errorHandler("patient Not Authenticated", 400))
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if (req.user.role !== "Patient") {
        return next(new errorHandler(`${req.user.role} Not Authorised For this Resources !`, 403))
    }
    next()
})