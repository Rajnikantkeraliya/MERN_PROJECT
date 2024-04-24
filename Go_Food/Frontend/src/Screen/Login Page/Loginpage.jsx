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
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credentials.email} placeholder="Enter email" onChange={handleChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} placeholder="Password" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-success">Log in</button>
                <Link to="/createuser" className='m-3 btn btn-danger'>Sign Up</Link>
            </form>
        </div>
    );
}
