import express from "express"
import { login, patientRegister, addNewAdmin,getAllDoctor, getUserDetails, logoutAdmin, logoutPatient, addNewDoctor} from "../Controller/User.Controller.js"
import { isAdminAuthanticated, isPatientAuthanticated } from "../Middleware/Authantication.js"


const router = express.Router()


router.post("/patient/register", patientRegister)
router.post("/login", login)
router.post("/admin/addnew", isAdminAuthanticated, addNewAdmin)
router.get("/doctors", getAllDoctor)
router.get("/admin/me", isAdminAuthanticated,getUserDetails)
router.get("/patient/me", isPatientAuthanticated,getUserDetails)
router.get("/admin/logout", isAdminAuthanticated,logoutAdmin)
router.get("/patient/logout", isPatientAuthanticated,logoutPatient)
router.post("/doctor/addnew", isAdminAuthanticated,addNewDoctor)

export default router 