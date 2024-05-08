import express from "express"
import { sendMessage } from "../Controller/Message.controller.js";

const router = express.Router();

router.post("/send", sendMessage)


export default router