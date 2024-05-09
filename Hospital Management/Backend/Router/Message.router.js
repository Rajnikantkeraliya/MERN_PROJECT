import express from "express"
import { getAllMessage, sendMessage } from "../Controller/Message.controller.js";
import {isAdminAuthanticated} from "../Middleware/Authantication.js"

const router = express.Router();

router.post("/send", sendMessage)
router.get("/getall",isAdminAuthanticated,getAllMessage)


export default router