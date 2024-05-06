import express from "express"
import { getbook } from "../Controller/Book_controller.js"


const router = express.Router()

router.get("/", getbook)

export default router
