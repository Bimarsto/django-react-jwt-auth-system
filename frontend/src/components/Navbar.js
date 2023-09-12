import React from "react";
import { Link, Redirect } from 'react-router-dom';

const Navbar = () => (
    <>
        <nav className="main-nav">
            <Link className="main-link" to='/'>Auth system</Link>
            <div className="nav-container">
                <ul className="nav-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/login'>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/signup'>Sign up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
);

export default Navbar