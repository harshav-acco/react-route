import React from "react";
import { Link } from "react-router-dom";

import "./commonStyles.css";

const NavBar = () => {
    return (
        <div className="container">
            <div className="header">
                <h2>Common Website</h2>
            </div>
            <div className="navs">
                <div><Link to="/">Home</Link></div>
                <div><Link to="/about">About</Link></div>
            </div>
        </div>
    )
}

export default NavBar;

