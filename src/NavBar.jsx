import React from "react";
import { Link } from "react-router-dom";

 // Optional: Add styles specific to Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Hospital Management System</h1>
        <ul className="nav-links">
          <li>
            <Link to="/admin/Adminlogin">Admin Login</Link>
          </li>
          <li>
            <Link to="/user/UserLogin">User Login</Link>
          </li>
          <li>
            <Link to="/user/Register">User Register</Link>
          </li>
        </ul>
      </div>
      
    </nav>
    
  );
}

export default Navbar;
