import express from "express"
import { login, patientRegister, addNewAdmin } from "../Controller/User.Controller.js"
import { isAdminAuthanticated, isPatientAuthanticated } from "../Middleware/Authantication.js"

const router = express.Router()


router.post("/patient/register", isPatientAuthanticated, patientRegister)
router.post("/login", login)
router.post("/admin/addnew", isAdminAuthanticated, addNewAdmin)

export default router