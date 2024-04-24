import styles from './Navbar.module.css';
import logo from "../../Assets/indian-food-board-illustration-south-indian-food-idli-vada-dosa_635702-493-removebg-preview.png"
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-success ${styles.navbar}`}>
                <div className={`container-fluid  ${styles.image_container} align-item-center`}>
                    <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-2">
                                <Link className="nav-link active" aria-current="page" to="/"><h2 className={styles.font_css}>Home</h2></Link>
                            </li>
                            <li className="nav-item fs-2 ms-3">
                                <Link className="nav-link active" aria-current="page" to="/login"><h2 className={styles.font_css}>Login</h2></Link>
                            </li>
                            <li className="nav-item fs-2 ms-3">
                                <Link className="nav-link active" aria-current="page" to="/createuser"><h2 className={styles.font_css}>Sign Up </h2></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
