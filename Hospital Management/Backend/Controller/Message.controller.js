import { CatchAsyncError } from "../Middleware/CatchAsyncError.middleware.js";
import { errorHandler } from "../Middleware/Error.middleware.js";
import { Message } from "../Models/Messageschema.model.js";

export const sendMessage = CatchAsyncError(async (req, res, next) => {
    const { firstName, lastName, email, phoneNumber, message } = req.body

    if (!firstName || !lastName || !email || !phoneNumber || !message) {
        return next(new errorHandler("Please Fill Full Form ", 400))
    }
    await Message.create({ firstName, lastName, email, phoneNumber, message })

    res.status(200).json({
        success: true,
        message: "Message Sent Successfully"
    })
})