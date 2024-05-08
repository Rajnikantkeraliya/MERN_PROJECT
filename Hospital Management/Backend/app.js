import express from "express";
import { config } from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbconnection } from "./Database/Dbconnection.js";
import messagerouter from "./Router/Message.router.js"
import { errorMiddleware } from "./Middleware/Error.middleware.js";
import userrouter from "./Router/User.router.js"


const app = express()

config({ path: "./config/config.env" })

app.use(cors(
    {
        origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
))

app.use(cookieParser())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(fileUpload(
    {
        useTempFiles: true,
        tempFileDir: "/temp/"
    }
))

app.use("/api/v1/message", messagerouter)

app.use("/api/v1/user", userrouter)




dbconnection();


app.use(errorMiddleware)
export default app