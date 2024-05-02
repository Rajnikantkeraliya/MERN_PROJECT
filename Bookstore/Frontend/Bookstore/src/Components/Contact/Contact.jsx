import React from 'react'
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';


function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Logging form data to the console
    };

    return (
        <div className='flex h-screen items-center justify-center border'>
            <div className='w-[600px]'>
                <div className='modal-box'>
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <NavLink to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</NavLink>
                        <h3 className="font-bold text-lg mb-3">Contact Us</h3>
                        <div className='mt-4'>
                            <span>Name</span>
                            <br />
                            <input type="text" {...register("name", { required: true })}
                                placeholder='Enter Your name' className='w-80 px-3 py-2 mt-3  border rounded-md outline-none' />
                        </div>
                        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        <div className='mt-4'>
                            <span>Email</span>
                            <br />
                            <input type="email" {...register("email", { required: true })}
                                placeholder='Enter Your Email' className='w-80 px-3 py-2 mt-3  border rounded-md outline-none' />
                        </div>
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        <div className='mt-4'>
                            <span>Message</span>
                            <br />
                            <textarea type="text" {...register("Message", { required: true })}
                                placeholder='Enter Your Message' className='w-80 px-3 py-2 mt-3 border rounded-md outline-none' autoComplete="current-password" />
                        </div>
                        {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                        <div className='flex'>

                            <button type="submit" className="btn bg-pink-500 text-white cursor-pointer mt-5 px-6 py-1 hover:text-black">Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact
