import style from "./Loginform.module.css"
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Loginpage() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/signup/loginuser", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });

            if (!response.ok) {
                throw new Error('Failed to log in');
            }

            const json = await response.json();

            if (!json.success) {
                alert("Invalid email or password");
            } else {
                localStorage.setItem("Authorizationtoken", json.Authorizationtoken);
                console.log(localStorage.getItem("Authorizationtoken"))
                navigate("/");
            }
        } catch (error) {
            console.error('Error logging in:', error.message);
            alert("Invalid Credential Plz Try again");
        }
    };

    const handleChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    return (
        <>
            <div className={`container mt-5  ${style.box_container}`}>
                <h1 className='mb-5'>Login Form</h1>
                <h1></h1>

                <form onSubmit={handleSubmit}>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" name='email' value={credentials.email} onChange={handleChange} placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" name='password' value={credentials.password} onChange={handleChange} placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button type="submit" className="btn btn-success">Log in</button>
                    <Link to="/createuser" className='m-3 btn btn-danger'>Sign Up</Link>
                </form>
            </div>

        </>
    );
}
