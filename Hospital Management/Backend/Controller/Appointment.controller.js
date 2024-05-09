import { CatchAsyncError } from "../Middleware/CatchAsyncError.middleware.js";
import { errorHandler } from "../Middleware/Error.middleware.js";
import { Appointment } from "../Models/Appointmentschema.model.js";
import { User } from "../Models/Userschema.model.js"

export const postAppointment = CatchAsyncError(async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        nic,
        dob,
        gender,
        appointment_date,
        department,
        doctor_firstName,
        doctor_lastName,
        hasvisited,
        address,
    } = req.body

    if (!firstName ||
        !lastName ||
        !email ||
        !phoneNumber ||
        !nic ||
        !dob ||
        !gender ||
        !appointment_date ||
        !department ||
        !doctor_firstName ||
        !doctor_lastName ||
        !address 
    ){
            return next(new errorHandler("Please Fill Form",400))
        }

        const isConflict = await User.find({
            firstName:doctor_firstName,
            lastName: doctor_lastName,
            doctorDepartment: department,
            role:"Doctor"
        })
        if(isConflict.length === 0){
            return next(new errorHandler("Doctor not Found",404))
            
        }
        if(isConflict.length > 1 ){
            console.log("01");
            return next(new errorHandler("Doctor Conflict Through Email Or Phone ",400))
        }
        const doctorId = isConflict[0]._id;
        const patientid = req.user._id;
  
        const appointment = await Appointment.create({
            
            firstName,
            lastName,
            email,
            phoneNumber,
            nic,
            dob,
            gender,
            appointment_date,
            department,
            doctor:{
                firstName:doctor_firstName,
                lastName: doctor_lastName,
            },
            hasvisited,
            address,
            doctorId,
            patientid
        })
        
        res.status(200).json({
            succss:true,
            message:"Appointment Sent Successfully",
            appointment
        })
})

export  const getAllAppointments = CatchAsyncError(async(req,res,next)=>{
    const appointment = await Appointment.find();

    res.status(200).json({
        success:true,
        appointment
    })
})

export const updateAppointment = CatchAsyncError(async(req,res,next)=>{
    const {id} = req.params;
    console.log(id)
    let appointment = await Appointment.findById(id);
    console.log(appointment)
    if(!appointment){
        return next (new errorHandler("Appointment Not Found",404))
    }
    appointment= await Appointment.findByIdAndUpdate(id,req.body,{
        new: true,
        runValidators:true,
        useFindAndModify:false
    })
    res.status(200).json({
        success:true,
        message : "Appointment Status Updated",
        appointment,
    })
})

export const deleteAppointment = CatchAsyncError(async(req,res,next)=>{
    const {id} = req.params;
    let appointment = await Appointment.findById(id);
    console.log(appointment)
    if(!appointment){
        return next (new errorHandler("Appointment Not Found",404))
    }
    appointment= await Appointment.deleteOne()
    res.status(200).json({
        success:true,
        message : "Appointment Is Deleted",
        appointment,
    })
})