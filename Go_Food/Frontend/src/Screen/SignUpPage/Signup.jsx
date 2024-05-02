import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './Signup.module.css'

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
        <div className={`container mt-5 ${style.signup_boxcontainer}`}>

            <h1 className='mb-5'>SignUp Form</h1>

            <form onSubmit={Handlesubmit}>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" name='name' value={credentials.name} placeholder="Enter Username" onChange={onchange} />
                    <label for="floatingInput">User Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" name='email' value={credentials.email} placeholder="Enter email" onChange={onchange} />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" name="password" placeholder="Password" value={credentials.password} onChange={onchange} />
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingPassword" name="geolocation" placeholder="Enter Address" value={credentials.geolocation} onChange={onchange} />
                    <label for="floatingPassword">Address</label>
                </div>

                <button type="submit" className="btn btn-success">Submit</button>
                <Link to="/login" className='m-3 btn btn-danger'>Already A user</Link>
            </form>
        </div>
    )
}
