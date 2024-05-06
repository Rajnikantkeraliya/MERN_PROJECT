import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import { useForm } from "react-hook-form";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Logging form data to the console
    };

    return (
        <div className='flex h-screen items-center justify-center border '>
            <div className='w-[600px]'>
                <div className='modal-box dark:bg-slate-900 dark:text-white dark:border'>
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <NavLink to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</NavLink>
                        <h3 className="font-bold text-lg mb-3">Signup</h3>
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
                            <span>Password</span>
                            <br />
                            <input type="password" {...register("password", { required: true })}
                                placeholder='Enter Your Password' className='w-80 px-3 py-2 mt-3 border rounded-md outline-none' autoComplete="current-password" />
                        </div>
                        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        <div className='flex'>

                            <button type="submit" className="btn bg-pink-500 text-white cursor-pointer mt-5 px-6 py-1 hover:text-black">Sign Up </button>
                            <NavLink onClick={() => document.getElementById('my_modal_3').showModal()} className="btn bg-pink-500 text-white cursor-pointer mt-5 mx-3 px-6 py-1 hover:text-black" > Login</NavLink>
                            <Login />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
