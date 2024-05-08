class errorHandler extends Error {

    constructor(message, statuscode) {
        super(message)
        this.statuscode = statuscode
    }
}

const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statuscode = err.statuscode || 500

    if (err.code === 11000) {
        const message = `duplicate ${Object.keys(err.keyValue)} Entered`
        err = new errorHandler(message, 400)
    }
    if (err.name === "JsonWebTokenError") {
        const message = "Json Web Token Is Invalid Plz Try Again"
        err = new errorHandler(message, 400)
    }
    if (err.name === "TokenExpiredError") {
        const message = "Json Web Token Is Expired Plz Try Again"
        err = new errorHandler(message, 400)
    }
    if (err.name === "CastError") {
        const message = `Invalid ${err.path}`
        err = new errorHandler(message, 400)
    }


    const errormessage = err.errors ? Object.values(err.errors).map((error) => error.message).join("; ") : err.message


    return res.status(err.statuscode)
        .json({
            success: false,
            message: errormessage
        })

}

export { errorHandler, errorMiddleware }