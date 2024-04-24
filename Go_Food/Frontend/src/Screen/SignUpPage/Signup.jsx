import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {

    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

    const navigate = useNavigate();

    const Handlesubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/signup/createuser", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
            });

            const json = await response.json(); // Parse response as JSON
            console.log(json);

            if (!json.success) {
                alert("Plz enter Valid Credentials")
            }
            else {
                navigate('/login')
            }
        } catch (error) {
            console.error('Error creating user:', error.message);
            alert('Error: ' + error.message); // Display error message to user
        }
    }


    const onchange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <div className='container mt-5'>
            <form onSubmit={Handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="name">User Name</label>
                    <input type="text" className="form-control" placeholder="Enter your Name" name='name' value={credentials.name} onChange={onchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credentials.email} placeholder="Enter email" onChange={onchange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password" value={credentials.password} onChange={onchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress">Address</label>
                    <input type="text" className="form-control" id="exampleInputAddress" name="geolocation" placeholder="Enter Address" value={credentials.geolocation} onChange={onchange} />
                </div>
                <div className="mb-3">
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                <Link to="/login" className='m-3 btn btn-danger'>Already A user</Link>
            </form>
        </div>
    )
}
