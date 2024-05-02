import styles from './Navbar.module.css';
import logo from "../../Assets/Fresh-food-logo-design-on-transparent-background-PNG-removebg-preview.png"
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from "react-bootstrap/Badge"


export default function Navbar() {

    const navigate = useNavigate()

    const handellogout = () => {
        localStorage.removeItem("Authorizationtoken")
        navigate("/login")
    }

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-success ${styles.navbar}`}>
                <div className={`container-fluid  ${styles.image_container} align-item-center`}>
                    <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item fs-2">
                                <Link className="btn bg-white text-success mx-2" aria-current="page" to="/"><h2 className={styles.font_css}>Home</h2></Link>
                            </li>
                            {(localStorage.getItem("Authorizationtoken")) ?
                                <li className="nav-item fs-2">
                                    <Link className="btn bg-white text-success mx-2" aria-current="page" to="/"><h2 className={styles.font_css}>My Orders</h2></Link>
                                </li>
                                : ""}

                        </ul>

                        {(!localStorage.getItem("Authorizationtoken")) ?
                            <div className="d-flex">

                                <Link className="btn bg-white text-success mx-2" aria-current="page" to="/login"><h2 className={styles.font_css}>Login</h2></Link>

                                <Link className=" btn bg-white text-success mx-2" aria-current="page" to="/createuser"><h2 className={styles.font_css}>Sign Up </h2></Link>
                            </div>
                            :
                            <>
                                <div className={`btn bg-white text-success mx-2`}>
                                    <h2 className={styles.font_css}>
                                        Mycart {""}
                                        <Badge pill bg="danger">2</Badge>
                                    </h2>
                                </div>

                                <div className={`btn bg-white text-danger mx-2`} onClick={handellogout}>
                                    <h2 className={styles.font_css}>Logout</h2>
                                </div>
                            </>
                        }

                    </div>
                </div>
            </nav>
        </div>
    );
}
