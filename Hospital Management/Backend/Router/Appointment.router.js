import express from "express"
import { deleteAppointment, getAllAppointments, postAppointment, updateAppointment } from "../Controller/Appointment.controller.js"
import { isAdminAuthanticated, isPatientAuthanticated } from "../Middleware/Authantication.js"


const router = express.Router()

router.post("/appointmentpost",isPatientAuthanticated,postAppointment)
router.get("/getallappointment",isAdminAuthanticated,getAllAppointments)
router.put("/appointmentupdate/:id",isAdminAuthanticated,updateAppointment)
router.delete("/appointmentdelete/:id",isAdminAuthanticated,deleteAppointment)


export default router